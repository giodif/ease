# Signal

A simple object for managing communitcations between different object modules.

Instead of having string identifiers to add and remove listeners, each thread is a different object that uses functions and objects to add and register listeners.

#How to Use Signal.js

Signal.js has a simple api with two functions.


##Creating a signal

The signal object doesn't require anything, just create it with the new operator.

```js

    var signal = new Signal();

```


##Defining the default meaning of "this"

When the constructor is called, an object can be passed in. This object becomes the default value of "this" when a listener is called. If an object is not passed in, then the default value of "this" is the signal object.

```js

    var context = {};
    var signal = new Signal( context );

```


##Registering listeners

Listeners must be registered with the signal instance to be notified when the signal broadcasts.

```js

    var speak = function( message ){
            console.log( message );
        };

    var signal = new Signal();
    
    //register the speak function witht the signal
    //so that it will be called when the signal broadcasts
    signal.register( speak );

```


##Registering listeners with a context

```js
    
    //human object. The speak function needs to know the real
    //value of this.name so that it can print "Bob"
    var human = {
        name  : "Bob",
        speak : function( message ){
            console.log( this.name + " says " + message );
        }
    };

    var signal = new Signal();
    
    //the second argument of the register fuction defined what
    //object "this" should reference in the listener when it is called.
    //if no second argument is passed, "this" referes to the default context
    //that the signal provides (either the signal itself or a context passed to 
    //the contructor)
    signal.register( human.speak, human );

```


##Unregistering listeners

The register function returns a function to unregister the listener.

```js
    
    //registers a listener and saves
    //the returned function in a variable
    var unregister = signal.register( listener, context );

    //call the function to unregister the listener
    unregister();

```

##Broadcasting

Once a listener has been registered, it will be called when the signal broadcasts a message. The message will be passed to each listener.

```js
    
    var human = {
        name  : "Bob",
        speak : function( message ){
            console.log( this.name + " says " + message );
        }
    };

    var talk = function( message ){
        console.log( "Talking: " + message );
    };

    var signal = new Signal();


    signal.register( human.speak, human );
    signal.register( talk );

    signal.broadcast( "Hello, World!" );

    //outputs:
    //  "Bob says Hello, World!"
    //  "Talking: Hello, World!"

```











