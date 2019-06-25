(function(){

  QUnit.test( "Our First Test", function( assert ) {
    var value = "hello tests";
    var some_number = 484;

    assert.equal( value, "hello tests");
    assert.equal( some_number, 484);
  });



  QUnit.test("Functions can access/modify variables in parent scope.", function(assert){
    var outside_the_function = null;
    function yay(){
      var inside_the_function = "Closures";
      outside_the_function = inside_the_function;
    }

    yay();

    assert.equal(outside_the_function, "Closures");
  });

  QUnit.test("Function Parameters become scoped to the function.", function(assert){

    function yay(param){
      assert.equal(param, "Function Scope");
    }

    yay("Function Scope");
  });

  QUnit.test("Child Scope", function(assert){
    function yay(){
      var kix = "Child Scope";
      assert.equal(kix, "Child Scope");
    }
    yay();
    
    var kix;
    // NOTE:
    // "this" is a special object that by default represents the global scope.
    // variables declared globally are stored as a property on the object: this.<variable>
    // if the variable is not global then this.<variable> will be undefined
    if(this.kix !== undefined){
      has_kix = kix;
    } else {
      has_kix = "Child Scope";
    }
    assert.equal(has_kix, "Child Scope");
  });

  QUnit.test("Block Scope", function(assert){
    function yay(){
      var from_yay = "Block Scope";
    }

    function foo(){
      var in_foo = "Block Scope";
      if(this.from_yay !== undefined){
        in_foo = this.from_yay;
      }
      assert.equal(in_foo, "Block Scope");
      assert.equal(this.from_yay, undefined);
    }
    yay();
    foo();
  });

  QUnit.test("Inner Scope", function(assert){

    var peanuts = "Inner Scope";

    function yay(){
      var peanuts = "Inner Scope";

      assert.equal(peanuts, "Inner Scope");
    }
    yay();

    assert.equal(peanuts, "Inner Scope");
  });

  QUnit.test("Copy By Value", function(assert){
    function yay(){
      if(this.counter !== undefined){
        counter = counter + 1;
      } else {
        var counter = 10;
      }
    }

    yay();
    
    
    assert.equal(this.counter, undefined);
    yay();
    assert.equal(this.counter, undefined);
    yay();
    assert.equal(this.counter, undefined);
  });

  QUnit.test("Closures", function(assert){
    var im_outside = "alpha";
    
    function yay(){
      var im_inside = "omega";
      return im_outside + im_inside;
    }

    assert.equal(yay(), "alphaomega");
  });

  QUnit.test("Global Scope", function(assert){
    var im_outside = 13;
    
    
    function yay(){
      im_outside += 1;
    }

    yay();
    assert.equal(im_outside, 14);
    yay();
    assert.equal(im_outside, 15);
  });

  QUnit.test("We can do goofy stuff with outer scope", function(assert){

    var hello = "greg";
    var name = "";

    function yay(){
      name += hello;
    }

    yay();
    assert.equal(name, name);
    yay();
    assert.equal(name, name);
    yay();
    assert.equal(name, name);
  });

  QUnit.test("Higher Order Functions", function(assert){
    var im_outter = 10;
    
    function yay(){
      im_outter /= 5;
    }
    function something(whatever){
      im_outter *= 20;
      whatever();
    }
    something(yay);
    assert.equal(im_outter, 40);

  });

  QUnit.test("Recursion", function(assert){
    function yay(){
      return " is dog";
    }
    function foo(whatever){
      return "hello, this" + whatever();
    }
    assert.equal(foo(yay), "hello, this is dog");
  });

})();
