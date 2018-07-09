function Node(val){
        this.value = val;
        this.left = null;
        this.right = null;
}

function BST(){
    this.root = null;

    BST.prototype.insert = function(val){
        if (!this.root){
            this.root = new Node(val);
            return this;
        }
        var runner = this.root;
        while (runner){
            if (val < runner.value){
                if(runner.left){
                    runner = runner.left;
                }
                else {
                    runner.left = new Node(val);
                    return this;
                }
            }
            else {
                if (val > runner.value){
                    if (runner.right){
                        runner = runner.right;
                    }
                    else {
                        runner.right = new Node(val);
                        return this;
                    }
                }
            }
        }
    }
}

var first =  new BST(30);
first.insert(60);
first.insert(40);
first.insert(30);
first.insert(41);


console.log(first);