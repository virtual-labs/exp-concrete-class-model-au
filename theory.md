### Theory

**Data Types in Java**

<center><img src="images\fig1.jpg"></center>

Additional data Types in Java

    *  Primitive : Boolean

    *  Non-primitive : String, classes, interfaces

Java is a statically-typed programming language.

    *  It means, all variables must be declared before its use

    *  Example: int a; float b; String c; boolean c; char d; byte e;
<center><img src="images\fig2.jpg"></center>

**Operators in Java**
<center><img src="images\fig3.jpg"></center>

Increment and Decrement Operators

<center><img src="images\fig4.jpg"></center>

Conditional Operators

<center><img src="images\fig5.jpg"></center>
<center><img src="images\fig6.jpg"></center>

**Control Statements in Java**

*  The Java programming language has two decision-making statements: if-else and switch.

* Syntax of if statement

<center><img src="images\fig7.jpg"></center>

* Syntax of switch statement:

<center><img src="images\fig8.jpg"></center>

**Loops in Java**

<center><img src="images\fig9.jpg"></center>

**Classes and Objects**

A class represents a set of objects that share a common structure and a common behaviour.

Class = State + behaviour

* State 
    - Data members
    - fields
    - properties
* Behaviour
    - member functions
    - methods

Syntax of a class in Java with main method:

```
public class program-name{

    //optional-variable-declarations-and-subroutines

    public static void main(String[] args){
        statements
    }

    //optional-variable-declarations-and -subroutines

}
```

**Writing to standard output**

1. System.out.println()

2. System.out.print()

3. System.out.printf()

*  Example:

    – System.out.println(“The value of x:”+ x)

    – System.out.print(“The value of x:”+ x)

    – System.out.println(x)

    – System.out.printf( "%1.2f", amount );

    Reading from standard input

*  First, you should add the following line to your program at the beginning of the source code file, before the "public class...":

import java.util.Scanner;

*  Then include the following statement at the beginning of your main() routine:

Scanner stdin = new Scanner( System.in );

*  Reading from user using stdin

    – stdin.nextInt(), stdin.nextFloat(), stdin.nextDouble(), stdin.nextLong(), stdin.nextBoolean()

Syntax of general class

```
Modifier class Class-name{

    variable declaration-1
    variable declaration-2
    method declaration-1
    method declaration-2
}

```
There are two types of variables:

i. static or class level variable and

ii. non-static or object or instance level variable.

**Static in Java**

* Carries the same meaning in C
* Lifetime - from start of execution (class loaded of JVM) to end of process
* Visibility  - based on provate, public, protected or default
* Static modifier can associates to 
    - variables
    - methods
    - blocks
    - nested classes

Basic Steps of how objects are created

1. Class is loaded by JVM

2. Static variable and methods are loaded and initialized and available for use

3. Constructor is called to instantiate the non static variables

4. Non static variables and methods are now available

The modifiers of a variable are:

i. public – accessible outside the class.

ii. private – accessible only inside the class

iii. protected – accessible to the current class and its children only.

Syntax of variable 

```
//Modifier type-name variable-name-or-names

class PlayerData{
    public static int playerCount;
    public String name;
    int age;
}
```
*  the static variable playerCount is stored as part of the representation of the class in memory.

    – It is accessed as PlayerData.playerCount

    – There is only one of it

*  the other two variables in the class definition are non-static

    – no such variable as PlayerData.name or PlayerData.age

    – The variables are associated with its instance

<center><img src="images\fig10.jpg"></center>

**Static member variables in Java:**

*  It is a variable which belongs to the class and not to object(instance)

*  Static variables are initialized only once, at the start of the execution. These variables will be initialized first, before the initialization of any instance variables

*  A single copy to be shared by all instances of the class

*  A static variable can be accessed directly by the class name and doesn’t need any object

*  Syntax to invoke is as follows:

    <class-name><variable-name> 
    It is a bad practice to invoke <object-name><variable-name>

Example of a Student class

```
public class Student{
    public String name;
    public double test1, test2, test3;
    public Student(){
        System.out.println("Creating Student");
    }
    public double getAverage(){
        //compute average test grade
        return (test1+test2+test3)/3;
    }//end of class Student
}
```

Syntax of method declaration in Java

```
modifiers return-type subroutine-name(parameter-list){
    statements
}
```

**Static methods in Java:**

* Static method in Java is a method which belongs to the class and not to the object.

* A static method can access only static data.

* It can not access non-static data

* A static method can call only other static methods and can not call a non-static method from it.

* A static method can be accessed directly by the class name and doesn’t need any object.

* Syntax to invoke is as follows:
    <class-name><method-name>
    It is a bad practice to invoke
    <object-name><method-name>
* A static method cannot refer to "this" or "super" keywords in anyway.

* Static methods cannot be overridden.

```
Static methods can call non-static methods and variables only through an instance

Non-static methods can call static methods and variables directly

```
An object has state, exhibits some well defined behaviour, and has a unique identity.

In Java, no variable can ever hold an object. A variable can only hold a reference to an object.

- There is a special portion of memory called the heap where objects live.
- Instead of holding an object itself, a variable holds the information necessary to find the object in memory.
- This information is called a reference or pointerto the object

* declaring a variable does not create an object

Syntax of creating object:

```
modifiers reyurn-type subroutine-name (parameter-list){
    statements
}

```
Static methods in Java:

* Static method in Java is a method which belongs to the class and not to the object.

* A static method can access only static data.

* It can not access non-static data

* A static method can call only other static methods and can not call a non-static method from it.

* A static method can be accessed directly by the class name and doesn’t need any object.

* Syntax to invoke is as follows:
<class-name><method-name>
It is a bad practice to invoke
<object-name><method-name>

* A static method cannot refer to "this" or "super" keywords in anyway.

* Static methods cannot be overridden.

```
Static methods can call non-static methods and variables only through an instance.

Non-static methods can call static methods and variables directly.

```

An object has state, exhibits some well defined behaviour, and has a unique identity.

In Java, no variable can ever hold an object. A variable can only hold a reference to an object.

- There is a speacial portion of memory called the heap where objects live.
- Instead of holding an object itself, a variable holds the information necessary to find the object in memory.
- This information is called a refernce or pointer to object.

* declaring a variable does not create an object.

Syntax of creating object:

```
modifier classname objectname1, [objectname2...objecname k];

When one object variable is assigned to another only a reference is copied. The object referred to is not copied.

```

Accessing member variables of an Object

<center>objectname.variablename</center>

* Suppose that the variable std refers to an object that is an instance of class Student.

* That object contains instance variables name test1, test2 and test3.
* These instance variables can be referred to as std.name, std.name, std.test1, std.test2 and std.test3

<center><img src="images\fig11.jpg"></center>

**Constructors, destructor, accessor and mutator Functions in Java:**

<center><img src="images\fig12.jpg"></center>

**Default constructor in Java**

* only new operator creates a variable by calling default constructor
    std = new Student();

* The object itself is somewhere in the heap.
* It is certainly not at all true to say that the object is stored in the variable std.
* The proper terminology is that the variable std refers to or points to the obejcts
* Facts, 
    - The default constructor is invoked even if there is no constructor available in the class.
    - In such case, Java complier provides a default constructor by default.

However, one can also write a default constructor in a class

Rules for default constructor

- Constructor name must be the same as its class name
- A constructor must have no explicit return type
- A Java constructor cannot be abstract, final and synchronized.

Syntax of deafult constructor:

modifier <class-name>(){<body>}

**Parametrized Constructors:**

* We can initialize the variables of the object at the time of creation
    Student std = new Student("Joe Martin");
* Syntax of parameterized constructor:
modifier <class-name>(formal-parameter-list){
    <body>
}

**Constructor Overloading in Java:**

* Constructor overloading in Java is a technique of having more than one constructor with different parameter lists.

* They are arranged in a way that each constructor performs a different task.

* They are differentiated by the compiler by the number of parameters in the list and their types.

Example

Student std = new Student(“Joe Martin”);

Student s1 = new Student(“Joe Martin”,90,45, 54);

The corresponding constructors are as follows:

<center><img src="images\fig13.jpg"></center>

Getter/setter

<center><img src="images\fig14.jpg"></center>
<center><img src="images\fig15.jpg"></center>
<center><img src="images\fig16.jpg"></center>

* There can be a lot of usage of java this keyword.

* In java, this is a reference variable that refers to the current object.

<center><img src="images\fig17.jpg"></center>


**Destructor in Java**

* Java lacks a destructor element, and instead uses a garbage collector for resource deallocation.

* The finalize() method is inherited in all Java objects (since the Java convention is that everything is a sub-class of Object).

* This method is NOT a destructor!

* Instead, it is supposed to be used in order to provide additional safety in cases when you need to be sure that the use of external resources (like opening and closing a file, or a socket, or a stream) will be done correctly, which means closing everything before the program shutdown.

```
protected void finalize() throws Throwable{<body>}

```


