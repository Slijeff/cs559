import {triangleIndices, vertexColors, vertexPos} from "./data";
import {mat4} from "./esm/index";

export default class GLcanvas {
    private trianglePosBuffer_itemSize = 3;
    private trianglePosBuffer_numItems = 24;
    private colorBuffer_itemSize = 3;
    private colorBuffer_numItems = 24;
    private MVPmatrix: WebGLUniformLocation;
    private trianglePosBuffer: WebGLBuffer;
    private colorBuffer: WebGLBuffer;
    private indexBuffer: WebGLBuffer;
    private shader_prog;
    private color_attr;
    private pos_attr;

    private angle1: number;
    private angle2: number;

    constructor(
        private canvas: HTMLCanvasElement,
        private gl: WebGLRenderingContext
    ) {
        const slider1 = document.getElementById('slider1') as HTMLInputElement;
        const slider2 = document.getElementById('slider2') as HTMLInputElement
        this.angle1 = parseInt((slider1).value);
        this.angle2 = parseInt((slider2).value);

        slider1.addEventListener('input', (ev) => {
            this.angle1 = parseFloat(slider1.value);
        })

        slider2.addEventListener('input', (ev) => {
            this.angle2 = parseFloat(slider2.value);
        })


    }

    public init() {
        console.info("initializing...")
        const vertex_source = (document.getElementById('vertextShader') as HTMLScriptElement).text;
        const frag_source = (document.getElementById('fragShader') as HTMLScriptElement).text;

        // compile shaders
        console.info("compiling vertext...")
        const vertex_shader = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(vertex_shader, vertex_source);
        this.gl.compileShader(vertex_shader);
        if (!this.gl.getShaderParameter(vertex_shader, this.gl.COMPILE_STATUS)) {
            console.error("compiling vertex shader failed: ", this.gl.getShaderInfoLog(vertex_shader));
        }

        console.info("compiling fragment...")
        const frag_shader = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(frag_shader, frag_source);
        this.gl.compileShader(frag_shader);
        if (!this.gl.getShaderParameter(frag_shader, this.gl.COMPILE_STATUS)) {
            console.error("compiling vertex shader failed: ", this.gl.getShaderInfoLog(frag_shader));
        }

        // link
        console.info("linking...")
        this.shader_prog = this.gl.createProgram();
        this.gl.attachShader(this.shader_prog, vertex_shader);
        this.gl.attachShader(this.shader_prog, frag_shader);
        this.gl.linkProgram(this.shader_prog);
        if (!this.gl.getProgramParameter(this.shader_prog, this.gl.LINK_STATUS)) {
            console.error("linking error");
        }
        this.gl.useProgram(this.shader_prog);

        // setup attributes
        console.info("setting up attrs...")
        this.pos_attr = this.gl.getAttribLocation(this.shader_prog, "vPosition")
        this.gl.enableVertexAttribArray(this.pos_attr);
        this.color_attr = this.gl.getAttribLocation(this.shader_prog, "vColor")
        this.gl.enableVertexAttribArray(this.color_attr);
        this.MVPmatrix = this.gl.getUniformLocation(this.shader_prog, "uMVP");

        // buffering
        console.info("buffering...")
        this.trianglePosBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.trianglePosBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexPos, this.gl.STATIC_DRAW);
        this.trianglePosBuffer_itemSize = 3;
        this.trianglePosBuffer_numItems = 24;

        this.colorBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexColors, this.gl.STATIC_DRAW);
        this.colorBuffer_itemSize = 3;
        this.colorBuffer_numItems = 24;

        this.indexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, triangleIndices, this.gl.STATIC_DRAW);

        console.info("init done")
    }

    public render = () => {

        const eye = [500 * Math.sin(this.angle1), 200, 500 * Math.cos(this.angle1)];
        const target = [0, 0, 0];
        const up = [0, 1, 0];

        const tModel = mat4.create();
        mat4.fromScaling(tModel, [100, 100, 100]);
        mat4.rotate(tModel, tModel, this.angle2, [1, 0, 1]);

        const tCamera = mat4.create();
        mat4.lookAt(tCamera, eye, target, up);

        const tProjection = mat4.create();
        mat4.perspective(tProjection, Math.PI / 4, this.canvas.width / this.canvas.height, 10, 1000);

        const tMVP = mat4.create();
        mat4.multiply(tMVP, tCamera, tModel); // "modelView" matrix
        mat4.multiply(tMVP, tProjection, tMVP);

        // Clear screen, prepare for rendering
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        // Set up uniforms & attributes
        this.gl.uniformMatrix4fv(this.MVPmatrix, false, tMVP);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        this.gl.vertexAttribPointer(this.color_attr, this.colorBuffer_itemSize,
            this.gl.FLOAT, false, 0, 0);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.trianglePosBuffer);
        this.gl.vertexAttribPointer(this.pos_attr, this.trianglePosBuffer_itemSize,
            this.gl.FLOAT, false, 0, 0);

        // Do the drawing
        this.gl.drawElements(this.gl.TRIANGLES, triangleIndices.length, this.gl.UNSIGNED_BYTE, 0);

        this.dataUpdate();
        requestAnimationFrame(this.render);
    }

    private dataUpdate() {
        this.angle1 = Math.sin(performance.now() * 0.001);
        this.angle2 = Math.cos(performance.now() * 0.001);
    }

}