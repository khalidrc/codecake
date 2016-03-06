"use strict";

let assert = require('chai').assert;
let Tree = require('../src/binary_search_tree.js');
let Node = Tree.Node;
let BST = Tree.BST;

describe('Binary Search Tree', function() {
    describe('addNewNode to BST', function () {
        it('function should add nodes to the BST', function () {
            let tree = new BST();
            tree.addNewNode(23);
            tree.addNewNode(45);
            tree.addNewNode(16);
            tree.addNewNode(37);
            tree.addNewNode(3);
            tree.addNewNode(99);
            tree.addNewNode(22);
            assert.strictEqual(tree.root.value, 23);
            assert.strictEqual(tree.root.right.value, 45);
            assert.strictEqual(tree.root.left.value, 16);
            assert.strictEqual(tree.root.right.left.value, 37);
            assert.strictEqual(tree.root.left.left.value, 3);
            assert.strictEqual(tree.root.right.right.value, 99);
            assert.strictEqual(tree.root.left.right.value, 22);
        });
    });
});
