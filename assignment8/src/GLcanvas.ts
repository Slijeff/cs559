import {triangleIndices, vertexNormals, vertexPos, vertexTextureCoords} from "./data";
import {mat3, mat4} from "./esm/index";
import {DrawParams} from "./DrawParams";

// noinspection DuplicatedCode
export default class GLcanvas {
    private trianglePosBuffer_itemSize = 3;
    private trianglePosBuffer_numItems = 24;
    private colorBuffer_itemSize = 3;
    private colorBuffer_numItems = 24;
    private normalBuffer_itemSize = 3;
    private normalBuffer_numItems = 24;
    private textureBuffer_itemSize = 2;
    private textureBuffer_numItems = 24;
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
    private vertCol: Float32Array;

    private angle1: number;
    private angle2: number;
    private positions: number[];
    private tex_attr;
    private texSampler1;
    private texSampler2;
    private textureBuffer: WebGLBuffer;
    private texture1: WebGLTexture;
    private texture2: WebGLTexture;


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
        this.tex_attr = this.gl.getAttribLocation(this.shader_prog, "vTexCoord");
        this.gl.enableVertexAttribArray(this.tex_attr);

        // setup uniforms
        this.MVPmatrix = this.gl.getUniformLocation(this.shader_prog, "uMVP");
        this.MVmatrix = this.gl.getUniformLocation(this.shader_prog, "uMV");
        this.MVNormalmatrix = this.gl.getUniformLocation(this.shader_prog, "uMVn");
        this.time = this.gl.getUniformLocation(this.shader_prog, "time");
        this.texSampler1 = this.gl.getUniformLocation(this.shader_prog, "texSampler1");
        this.gl.uniform1i(this.texSampler1, 0);
        this.texSampler2 = this.gl.getUniformLocation(this.shader_prog, "texSampler2");
        this.gl.uniform1i(this.texSampler2, 1);

        // buffering
        console.info("buffering...")
        this.trianglePosBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.trianglePosBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexPos, this.gl.STATIC_DRAW);
        this.trianglePosBuffer_itemSize = 3;
        this.trianglePosBuffer_numItems = 24;

        const temp = []
        for (let i = 0; i < 72; i++) {
            temp.push(this.randomBetween(0, 1));
        }
        this.vertCol = new Float32Array(temp);

        this.colorBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.colorBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.vertCol, this.gl.STATIC_DRAW);
        this.colorBuffer_itemSize = 3;
        this.colorBuffer_numItems = 24;

        this.normalBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexNormals, this.gl.STATIC_DRAW);
        this.normalBuffer_itemSize = 3;
        this.normalBuffer_numItems = 24;

        this.textureBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexTextureCoords, this.gl.STATIC_DRAW);

        this.indexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, triangleIndices, this.gl.STATIC_DRAW);

        // Set up texture
        this.texture1 = this.gl.createTexture();
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture1);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        const image1 = new Image();

        this.texture2 = this.gl.createTexture();
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture2);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        const image2 = new Image();

        image1.onload = () => {this.loadTexture(image1, this.texture1); }
        image1.crossOrigin = "anonymous";
        image1.src = "https://farm6.staticflickr.com/5564/30725680942_e3bfe50e5e_b.jpg";

        image2.onload = () => {this.loadTexture(image2, this.texture2); }
        image2.crossOrigin = "anonymous";
        image2.src = "https://farm6.staticflickr.com/5564/30725680942_e3bfe50e5e_b.jpg";


        console.info("init done")
        this.positions = [];
        for (let i = 0; i < 100; i++) {
            this.positions.push(this.randomBetween(-1, 1) * 10);
        }

    }

    public render = () => {

        // Clear screen, prepare for rendering
        this.gl.clearColor(Math.sin(performance.now() * .0013),
            Math.cos(performance.now() * .0014),
            Math.tan(performance.now() * .0016),
            .5);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        const num_cube = 10
        for (let i = 0; i < num_cube; i++) {
            this.drawCube({
                translate: [0, 0, this.positions[i] * 50],
                rotate: [{
                    rotateDeg: Math.sin(performance.now() * .001),
                    rotateVec: [this.positions[i], this.positions[i], this.positions[i]]
                }
                ]
            });
            this.drawCube({
                translate: [0, this.positions[i] * 50, 0],
                rotate: [{
                    rotateDeg: Math.sin(performance.now() * .001),
                    rotateVec: [this.positions[i], this.positions[i], this.positions[i]]
                }
                ]
            });
            this.drawCube({
                translate: [this.positions[i] * 50, 0, 0],
                rotate: [{
                    rotateDeg: Math.sin(performance.now() * .001),
                    rotateVec: [this.positions[i], this.positions[i], this.positions[i]]
                }
                ]
            });
            this.drawCube({
                translate: [this.positions[i] * 50, this.positions[i] * 50, 0],
                rotate: [{
                    rotateDeg: Math.sin(performance.now() * .001),
                    rotateVec: [this.positions[i], this.positions[i], this.positions[i]]
                }
                ]
            });
            this.drawCube({
                translate: [0, this.positions[i] * 50, this.positions[i] * 50],
                rotate: [{
                    rotateDeg: Math.sin(performance.now() * .001),
                    rotateVec: [this.positions[i], this.positions[i], this.positions[i]]
                }
                ]
            });
            this.drawCube({
                translate: [this.positions[i] * 50, 0, this.positions[i] * 50],
                rotate: [{
                    rotateDeg: Math.sin(performance.now() * .001),
                    rotateVec: [this.positions[i], this.positions[i], this.positions[i]]
                }
                ]
            });
        }

        this.dataUpdate();
        requestAnimationFrame(this.render);
    }

    private randomBetween(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    private loadTexture(image: HTMLImageElement, texture: WebGLTexture) {
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);

        this.gl.generateMipmap(this.gl.TEXTURE_2D);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_LINEAR);
    }

    private drawCube(
        {
            scale = [50, 50, 50],
            rotate = [],
            translate = [0, 0, 0]

        }: DrawParams
    ) {
        // const eye = [600, Math.sin(performance.now() * .001) * 500, 600];
        const eye = [this.angle1 * 200, this.angle2 * 200, 600];
        const target = [0, 0, 0];
        const up = [0, 1, 0];

        const tCamera = mat4.create();
        mat4.lookAt(tCamera, eye, target, up);

        const tModel = mat4.create();
        mat4.fromTranslation(tModel, translate);
        mat4.scale(tModel, tModel, scale);
        rotate.forEach((rot) => {
            mat4.rotate(tModel, tModel, rot.rotateDeg, rot.rotateVec);
        })

        const tProjection = mat4.create();
        mat4.perspective(tProjection, Math.PI / 4, this.canvas.width / this.canvas.height, 10, undefined);

        const tMV = mat4.create();
        const tMVn = mat3.create();
        const tMVP = mat4.create();
        mat4.multiply(tMV, tCamera, tModel);
        mat3.normalFromMat4(tMVn, tMV); // "modelView" matrix
        mat4.multiply(tMVP, tProjection, tMV);

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
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer);
        this.gl.vertexAttribPointer(this.tex_attr, this.textureBuffer_itemSize, this.gl.FLOAT, false, 0, 0);

        // Bind texture
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture1);
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture2);

        // Do the drawing
        this.gl.drawElements(this.gl.TRIANGLES, triangleIndices.length, this.gl.UNSIGNED_BYTE, 0);

    }

    private dataUpdate() {
        // this.angle1 = Math.cos(performance.now() * 0.001);
        // this.angle2 = Math.sin(performance.now() * 0.001);
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

    private createProgramFromScript(vertexId: string, fragId: string): WebGLProgram {
        const vertex_shader = this.createShaderFromScript(vertexId, this.gl.VERTEX_SHADER);
        const frag_shader = this.createShaderFromScript(fragId, this.gl.FRAGMENT_SHADER);
        return this.createProgram(vertex_shader, frag_shader);
    }

}