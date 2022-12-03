import {triangleIndices, vertexColors, vertexNormals, vertexPos} from "./data";
import {mat3, mat4} from "./esm/index";

export default class GLcanvas {
    private trianglePosBuffer_itemSize = 3;
    private trianglePosBuffer_numItems = 24;
    private colorBuffer_itemSize = 3;
    private colorBuffer_numItems = 24;
    private normalBuffer_itemSize = 3;
    private normalBuffer_numItems = 24;
    private MVPmatrix: WebGLUniformLocation;
    private trianglePosBuffer: WebGLBuffer;
    private normalBuffer: WebGLBuffer;
    private colorBuffer: WebGLBuffer;
    private indexBuffer: WebGLBuffer;
    private shader_prog;
    private color_attr;
    private pos_attr;
    private normal_attr;
    private MVNormalmatrix: WebGLUniformLocation;
    private MVmatrix: WebGLUniformLocation;
    private time: WebGLUniformLocation;

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

        this.shader_prog = this.createProgramFromScript('vertexShader', 'fragShader');
        this.gl.useProgram(this.shader_prog);

        // setup attributes
        console.info("setting up attrs...")
        this.pos_attr = this.gl.getAttribLocation(this.shader_prog, "vPosition")
        this.gl.enableVertexAttribArray(this.pos_attr);
        this.color_attr = this.gl.getAttribLocation(this.shader_prog, "vColor")
        this.gl.enableVertexAttribArray(this.color_attr);
        this.normal_attr = this.gl.getAttribLocation(this.shader_prog, "vNormal")
        this.gl.enableVertexAttribArray(this.normal_attr);

        // setup uniforms
        this.MVPmatrix = this.gl.getUniformLocation(this.shader_prog, "uMVP");
        this.MVmatrix = this.gl.getUniformLocation(this.shader_prog, "uMV");
        this.MVNormalmatrix = this.gl.getUniformLocation(this.shader_prog, "uMVn");
        this.time = this.gl.getUniformLocation(this.shader_prog, "time");

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

        this.normalBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexNormals, this.gl.STATIC_DRAW);
        this.normalBuffer_itemSize = 3;
        this.normalBuffer_numItems = 24;

        this.indexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, triangleIndices, this.gl.STATIC_DRAW);

        console.info("init done")
    }

    public render = () => {

        const eye = [600, 200, 600];
        const target = [0, 0, 0];
        const up = [0, 1, 0];

        const tModel = mat4.create();
        mat4.fromScaling(tModel, [50, 50, 50]);
        mat4.rotate(tModel, tModel, this.angle2, [1, 0, 1]);
        mat4.rotate(tModel, tModel, this.angle1, [0, 0, 1]);

        const tModel2 = mat4.create();
        mat4.fromTranslation(tModel2, [150, 150, 0]);
        mat4.scale(tModel2, tModel2, [50, 50, 50]);
        mat4.rotate(tModel2, tModel2, this.angle1, [1, 0, 1]);
        mat4.rotate(tModel2, tModel2, this.angle2, [0, 0, 1]);

        const tCamera = mat4.create();
        mat4.lookAt(tCamera, eye, target, up);

        const tProjection = mat4.create();
        mat4.perspective(tProjection, Math.PI / 4, this.canvas.width / this.canvas.height, 10, 1000);

        const tMV = mat4.create();
        const tMV2 = mat4.create();
        const tMVn = mat3.create();
        const tMVn2 = mat3.create();
        const tMVP = mat4.create();
        const tMVP2 = mat4.create();
        mat4.multiply(tMV, tCamera, tModel);
        mat3.normalFromMat4(tMVn, tMV); // "modelView" matrix
        mat4.multiply(tMVP, tProjection, tMV);

        mat4.multiply(tMV2, tCamera, tModel2);
        mat3.normalFromMat4(tMVn2, tMV2); // "modelView" matrix
        mat4.multiply(tMVP2, tProjection, tMV2);

        // Clear screen, prepare for rendering
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        // Set up uniforms & attributes
        this.gl.uniformMatrix4fv(this.MVPmatrix, false, tMVP);
        this.gl.uniformMatrix3fv(this.MVNormalmatrix, false, tMVn);
        this.gl.uniformMatrix4fv(this.MVmatrix, false, tMV);
        this.gl.uniform1f(this.time, performance.now() * .001);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        this.gl.vertexAttribPointer(this.color_attr, this.colorBuffer_itemSize,
            this.gl.FLOAT, false, 0, 0);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.trianglePosBuffer);
        this.gl.vertexAttribPointer(this.pos_attr, this.trianglePosBuffer_itemSize,
            this.gl.FLOAT, false, 0, 0);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        this.gl.vertexAttribPointer(this.normal_attr, this.normalBuffer_itemSize,
            this.gl.FLOAT, false, 0, 0);

        // Do the drawing
        this.gl.drawElements(this.gl.TRIANGLES, triangleIndices.length, this.gl.UNSIGNED_BYTE, 0);

        // Set up uniforms & attributes
        this.gl.uniformMatrix4fv(this.MVPmatrix, false, tMVP2);
        this.gl.uniformMatrix3fv(this.MVNormalmatrix, false, tMVn2);
        this.gl.uniformMatrix4fv(this.MVmatrix, false, tMV2);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        this.gl.vertexAttribPointer(this.color_attr, this.colorBuffer_itemSize,
            this.gl.FLOAT, false, 0, 0);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.trianglePosBuffer);
        this.gl.vertexAttribPointer(this.pos_attr, this.trianglePosBuffer_itemSize,
            this.gl.FLOAT, false, 0, 0);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        this.gl.vertexAttribPointer(this.normal_attr, this.normalBuffer_itemSize,
            this.gl.FLOAT, false, 0, 0);
        this.gl.drawElements(this.gl.TRIANGLES, triangleIndices.length, this.gl.UNSIGNED_BYTE, 0);

        this.dataUpdate();
        requestAnimationFrame(this.render);
    }

    private dataUpdate() {
        this.angle1 = Math.cos(performance.now() * 0.001);
        this.angle2 = Math.sin(performance.now() * 0.001);
    }

    private compileShader(source: string, shaderType: number): WebGLShader {
        const shader = this.gl.createShader(shaderType);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error("compiling shader failed: ", this.gl.getShaderInfoLog(shader));
        }
        return shader;
    }

    private createProgram(vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
        const program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);
        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
            console.error("linking error: ", this.gl.getProgramInfoLog(program));
        }
        return program;
    }

    private createShaderFromScript(id: string, shaderType: number): WebGLShader {
        const source = (document.getElementById(id) as HTMLScriptElement).text;
        return this.compileShader(source, shaderType);
    }

    private createProgramFromScript(vertexId: string, fragId:string): WebGLProgram {
        const vertex_shader = this.createShaderFromScript(vertexId, this.gl.VERTEX_SHADER);
        const frag_shader = this.createShaderFromScript(fragId, this.gl.FRAGMENT_SHADER);
        return this.createProgram(vertex_shader, frag_shader);
    }

}