const tf = require("@tensorflow/tfjs");

const m = tf.variable(tf.tensor(4.0));
console.log(m);

function f(x){
    return tf.mul(m, x);
}

f(5).print();

function loss(){
    return f(5).sub(5).square();
}

loss().print();

const optimizer = tf.train.sgd(0.01);

for (i = 0; i<20; i++){
    optimizer.minimize(loss);
    console.log(m.dataSync(), f(5).dataSync());
}