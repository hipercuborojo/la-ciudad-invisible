import p5 from "p5";

class Automaton {
    private _cellSize: number;
    private _nextval: { [key: number]: { [key: number]: number } };
    private board: number[][];
    private _colors: { [key: number]: number | number[] | p5.Color };

    private _width: number;
    private _height: number;

    constructor(
        p: p5,
        cellSize: number = 10,
        colors: { [key: number]: number | number[] | p5.Color } = { 0: 0, 1: 255 },
        diedRules: { [key: number]: number } = {},
        liveRules: { [key: number]: number } = {}
    ) {
        this._cellSize = cellSize;
        this.board = Array<number[]>();
        this._nextval = {
            0: {
                0: 0,
                1: 0,
                2: 0,
                3: 1,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                ...diedRules,
            },
            1: {
                0: 0,
                1: 0,
                2: 1,
                3: 1,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                ...liveRules,
            },
        };

        this._width = p.width;
        this._height = p.height;

        this._colors = colors;

        this._walk((i, j) => {
            if (this.board[i] === undefined) {
                this.board[i] = Array<number>();
            }
            this.board[i][j] = p.random() > 0.7 ? 1 : 0;
        });
    }

    private _walk(fn: (i: number, j: number) => void) {
        for (let j = 0; j < this._height / this._cellSize; j++) {
            for (let i = 0; i < this._width / this._cellSize; i++) {
                fn(i, j);
            }
        }
    }

    private _nextState(): number[][] {
        let next: number[][] = Array<number[]>();
        this._walk((i, j) => {
            let population = 0;

            for (let y = -1; y <= 1; y++) {
                for (let x = -1; x <= 1; x++) {
                    if (x === 0 && y === 0) {
                        continue;
                    }

                    if (i + x < 0 || i + x >= this.board.length || j + y < 0 || j + y >= this.board[0].length) {
                        continue;
                    }

                    if (this.board[i + x][j + y]) {
                        population++;
                    }
                }
            }

            if (next[i] === undefined) {
                next[i] = Array<number>();
            }

            next[i][j] = this._nextval[this.board[i][j]][population];
        });
        return next;
    }

    getImageState(p: p5): p5.Image {
        const img = p.createImage(this._width, this._height);
        img.loadPixels();
        this._walk((i, j) => {
            const c = this._colors[this.board[i][j]];

            for (let x = 0; x < this._cellSize; x++) {
                for (let y = 0; y < this._cellSize; y++) {
                    img.set(i * this._cellSize + x, j * this._cellSize + y, c);
                }
            }
        });
        img.updatePixels();
        return img;
    }

    getBlendedState(p: p5, sImage: p5.Image): p5.Image {
        const img = p.createImage(p.width, p.height);

        img.loadPixels();
        sImage.loadPixels();

        // let d = pixelDensity();
        // let fullImage = 4 * (width * d) * (height * d);
        // for (let i = 0; i < fullImage; i += 4) {
        //     const w = int(i / width) % img.width;
        //     const h = (i - w * width) % img.height;

        //     const x = w;
        //     const y = h;

        //     const isAlive = this.board[x % this.board[0].length][y % this.board.length];

        //     if (isAlive <= 0) {
        //         continue;
        //     }

        //     img.pixels[i] = 255;
        //     img.pixels[i + 1] = 120;
        //     img.pixels[i + 2] = 14;
        //     img.pixels[i + 3] = 255;
        // }
        // console.log("rendering");
        this._walk((i, j) => {
            const isAlive = this.board[i][j];

            if (isAlive <= 0) {
                return;
            }

            const scale = sImage.width / img.width;
            // img.copy(
            //     sImage,
            //     i * this._cellSize * scale,
            //     j * this._cellSize * scale,
            //     this._cellSize,
            //     this._cellSize,
            //     i * this._cellSize,
            //     j * this._cellSize,
            //     this._cellSize,
            //     this._cellSize
            // );

            // const c = this._colors[this.board[i][j]];
            // for (let x = 0; x < this._cellSize; x++) {
            //     for (let y = 0; y < this._cellSize; y++) {
            //         const x1 = i * this._cellSize + x;
            //         const y1 = j * this._cellSize + y;

            //         // const c = sImage.get(x1 * scale, y1 * scale);
            //         img.set(x1, y1, 255);
            //     }
            // }

            // for (let x = i * this._cellSize; x < (i + 1) * this._cellSize; x++) {
            //     for (let y = j * this._cellSize; y < (j + 1) * this._cellSize; y++) {
            //         const index = x * img.width + y;
            //         // img.set(x, y, sImage.get(x, y));
            //         img.pixels[index] = sImage.pixels[index];
            //         img.pixels[index + 1] = sImage.pixels[index + 1];
            //         img.pixels[index + 2] = sImage.pixels[index + 2];
            //         img.pixels[index + 3] = sImage.pixels[index + 3];

            //         // img.set(, , 255 * isAlive);
            //     }
            // }
            // if (isAlive !== 0) {
            //     img.copy(
            //         sImage,
            //         i * this._cellSize,
            //         j * this._cellSize,
            //         this._cellSize,
            //         this._cellSize,
            //         i * this._cellSize,
            //         j * this._cellSize,
            //         this._cellSize,
            //         this._cellSize
            //     );
            // }
        });
        sImage.updatePixels();
        img.updatePixels();
        return img;
    }

    draw(p: p5) {
        this._walk((i, j) => {
            p.fill(this._colors[this.board[i][j]] as p5.Color);
            p.rect(i * this._cellSize, j * this._cellSize, this._cellSize, this._cellSize);
        });
    }

    updateState() {
        const nextState = this._nextState();
        this.board = nextState;
    }
}

export default Automaton;