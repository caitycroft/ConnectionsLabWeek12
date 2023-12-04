
let canvas;

let tree = [];
let leaves = [];

let count = 0;


function setup() {
    createCanvas(600, 800);
    // canvas.parent('sketch_TreeOfLife');
    let a = createVector(width / 2, height);
    let b = createVector(width / 2, height - 120);
    let root = new Branch(a, b);

    tree[0] = root;
}

function mousePressed() {
    for (let i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
            tree.push(tree[i].branchA());
            tree.push(tree[i].branchB());
        }
        tree[i].finished = true;
    }
    count++;

    if (count === 6) {
        for (var i = 0; i < tree.length; i++) {
            if (!tree[i].finished) {
                let leaf = tree[i].end.copy();
                leaves.push(leaf);
            }
        }
    }

}

function draw() {
    background(51);

    for (var i = 0; i < tree.length; i++) {
        tree[i].show();
        // tree[i].jitter();
    }

    for (var i = 0; i < leaves.length; i++) {
        fill(255, 0, 100, 100);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 8, 8);
        leaves[i].y += random(0, 2);
    }


    // //CREATE A CONDITION THAT RESETS THE SKETCH TO 0
    // if (index == i){
    //     index = 0; 
    // }; 


}

