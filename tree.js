
class Tree {
    branch = [];
    constructor() {
        let a = createVector(width / 2, height);
        let b = createVector(width / 2, height - 115);
        let root = new Branch(a, b);


        this.branch[0] = root;

        for (let index = 0; index < 8; index++) {
            this.createBranches();

        }


    }
    show() {
        for (var i = 0; i < this.branch.length; i++) {
            this.branch[i].show();

        }
    }

    createBranches() {
        for (let i = this.branch.length - 1; i >= 0; i--) {
            if (!this.branch[i].finished) {
                this.branch.push(this.branch[i].branchA());
                this.branch.push(this.branch[i].branchB());
            }
            this.branch[i].finished = true;
        }


    }
}
