const modules = [
  {
    title: "Breaking the Surface",
    badge: "01",
    summary: "Compile, run, and read the shape of a tiny Java program.",
    concepts: ["class", "main", "println", "compile"],
    quiz: {
      prompt: "Which method signature lets the JVM start a classic Java program?",
      options: ["public static void main(String[] args)", "start public void main(String args)", "public main(String[] args)", "static start(String[] args)"],
      answer: 0,
      explain: "The JVM looks for public static void main(String[] args)."
    },
    drag: [
      "public class HelloLab {",
      "  public static void main(String[] args) {",
      "    System.out.println(\"Java wakes up!\");",
      "  }",
      "}"
    ],
    fill: {
      lines: ["public class HelloLab {", "  public static void main(String[] args) {", "    System.out.__0__(\"ship it\");", "  }", "}"],
      answers: [["println", "print"]]
    },
    starter: "public class HelloLab {\n  public static void main(String[] args) {\n    System.out.println(\"Java wakes up!\");\n  }\n}"
  },
  {
    title: "Trip to Objectville",
    badge: "02",
    summary: "Separate class blueprints from objects that actually hold state.",
    concepts: ["object", "class", "field", "method"],
    quiz: {
      prompt: "A class is closest to which idea?",
      options: ["A blueprint for objects", "A finished object in memory", "A loop that repeats forever", "A package installer"],
      answer: 0,
      explain: "A class describes what objects know and do."
    },
    drag: [
      "class Dog {",
      "  String name;",
      "  void bark() {",
      "    System.out.println(name + \" says woof\");",
      "  }",
      "}"
    ],
    fill: {
      lines: ["Dog d = new __0__();", "d.__1__ = \"Mochi\";", "d.bark();"],
      answers: ["Dog", "name"]
    },
    starter: "public class Objectville {\n  static class Dog {\n    String name;\n    void bark() {\n      System.out.println(name + \" says woof\");\n    }\n  }\n\n  public static void main(String[] args) {\n    Dog d = new Dog();\n    d.name = \"Mochi\";\n    d.bark();\n  }\n}"
  },
  {
    title: "Variables and References",
    badge: "03",
    summary: "Track primitives as values and object variables as remote controls.",
    concepts: ["int", "boolean", "reference", "array"],
    quiz: {
      prompt: "What does an object reference variable store?",
      options: ["A way to reach an object", "The whole object copied into the variable", "Only integers", "A compiler warning"],
      answer: 0,
      explain: "The object lives on the heap; the variable holds a reference to it."
    },
    drag: [
      "int score = 10;",
      "int bonus = score;",
      "score = 20;",
      "System.out.println(bonus);"
    ],
    fill: {
      lines: ["int[] scores = {4, 7, 9};", "System.out.println(scores[__0__]);"],
      answers: ["1"]
    },
    starter: "public class References {\n  public static void main(String[] args) {\n    int[] scores = {4, 7, 9};\n    System.out.println(scores[1]);\n  }\n}"
  },
  {
    title: "Methods and Flow",
    badge: "04",
    summary: "Use parameters, return values, loops, and conditionals to make behavior flexible.",
    concepts: ["if", "for", "return", "parameter"],
    quiz: {
      prompt: "Which keyword sends a value back from a method?",
      options: ["return", "break", "class", "new"],
      answer: 0,
      explain: "return exits the method and can hand a value back to the caller."
    },
    drag: [
      "static int doubleIt(int x) {",
      "  return x * 2;",
      "}",
      "System.out.println(doubleIt(6));"
    ],
    fill: {
      lines: ["for (int i = 0; i < 3; i++) {", "  System.out.__0__(i);", "}"],
      answers: [["println", "print"]]
    },
    starter: "public class MethodFlow {\n  static int doubleIt(int x) {\n    return x * 2;\n  }\n\n  public static void main(String[] args) {\n    for (int i = 1; i <= 3; i++) {\n      System.out.println(doubleIt(i));\n    }\n  }\n}"
  },
  {
    title: "Polymorphism",
    badge: "05",
    summary: "Let a superclass reference point at specialized subclass behavior.",
    concepts: ["extends", "override", "abstract", "interface"],
    quiz: {
      prompt: "What does polymorphism let you do?",
      options: ["Treat different subclasses through a shared type", "Turn Java into JavaScript", "Skip compiling", "Store strings in an int"],
      answer: 0,
      explain: "A shared superclass or interface can call behavior supplied by many concrete classes."
    },
    drag: [
      "Animal a = new Cat();",
      "a.speak();",
      "class Cat extends Animal {",
      "  void speak() { System.out.println(\"meow\"); }",
      "}"
    ],
    fill: {
      lines: ["class Cat __0__ Animal {", "  void speak() { System.out.println(\"meow\"); }", "}"],
      answers: ["extends"]
    },
    starter: "public class PolyDemo {\n  static class Animal { void speak() { System.out.println(\"sound\"); } }\n  static class Cat extends Animal { void speak() { System.out.println(\"meow\"); } }\n\n  public static void main(String[] args) {\n    Animal a = new Cat();\n    a.speak();\n  }\n}"
  },
  {
    title: "Using the Java Library",
    badge: "06",
    summary: "Find and use useful library classes instead of writing every tool yourself.",
    concepts: ["import", "API", "ArrayList", "library"],
    quiz: {
      prompt: "Why write ArrayList<String> instead of plain ArrayList?",
      options: ["The compiler can protect the element type", "It makes the list immutable", "It sorts automatically", "It disables methods"],
      answer: 0,
      explain: "Generics give compile-time type checks and reduce casting."
    },
    drag: [
      "ArrayList<String> names = new ArrayList<String>();",
      "names.add(\"Ada\");",
      "names.add(\"Grace\");",
      "System.out.println(names.size());"
    ],
    fill: {
      lines: ["ArrayList<String> names = new ArrayList<String>();", "names.__0__(\"Ada\");", "System.out.println(names.__1__());"],
      answers: ["add", "size"]
    },
    starter: "import java.util.ArrayList;\n\npublic class CollectionsDemo {\n  public static void main(String[] args) {\n    ArrayList<String> names = new ArrayList<String>();\n    names.add(\"Ada\");\n    names.add(\"Grace\");\n    System.out.println(names.size());\n  }\n}"
  }
];

modules.push(
  {
    title: "Better Living in Objectville",
    badge: "07",
    summary: "Design classes for reuse without forcing every class into the same mold.",
    concepts: ["inheritance", "is-a", "has-a", "override"],
    quiz: { prompt: "What is inheritance for?", options: ["Reusing and specializing behavior", "Skipping constructors", "Making all fields public", "Deleting objects"], answer: 0, explain: "Inheritance shares behavior through an is-a relationship." },
    drag: ["class Vehicle {", "  void move() { System.out.println(\"moving\"); }", "}", "class Bike extends Vehicle {", "  void ringBell() { System.out.println(\"ding\"); }", "}"],
    fill: { lines: ["class Bike __0__ Vehicle {", "  void ringBell() { System.out.__1__(\"ding\"); }", "}"], answers: ["extends", ["println", "print"]] },
    starter: "public class InheritanceDesign {\n  static class Vehicle { void move() { System.out.println(\"moving\"); } }\n  static class Bike extends Vehicle { void ringBell() { System.out.println(\"ding\"); } }\n  public static void main(String[] args) {\n    Bike b = new Bike();\n    b.move();\n    b.ringBell();\n  }\n}"
  },
  {
    title: "Serious Polymorphism",
    badge: "08",
    summary: "Model shared promises with abstract classes and interfaces.",
    concepts: ["abstract", "interface", "implements", "contract"],
    quiz: { prompt: "What does an interface mainly describe?", options: ["A capability a class promises to provide", "A finished object", "A loop counter", "A file name"], answer: 0, explain: "Interfaces define methods implementing classes must provide." },
    drag: ["interface Playable {", "  void play();", "}", "class Song implements Playable {", "  public void play() { System.out.println(\"la\"); }", "}"],
    fill: { lines: ["interface Playable { void play(); }", "class Song __0__ Playable {", "  public void play() { System.out.println(\"la\"); }", "}"], answers: ["implements"] },
    starter: "public class InterfaceDemo {\n  interface Playable { void play(); }\n  static class Song implements Playable { public void play() { System.out.println(\"la\"); } }\n  public static void main(String[] args) {\n    Playable p = new Song();\n    p.play();\n  }\n}"
  },
  {
    title: "Life and Death of an Object",
    badge: "09",
    summary: "Initialize objects deliberately and understand how references point into memory.",
    concepts: ["constructor", "new", "heap", "this"],
    quiz: { prompt: "When does a constructor run?", options: ["When an object is created with new", "Every time a field is read", "Only during import", "When the JVM closes"], answer: 0, explain: "A constructor initializes a new object." },
    drag: ["class Counter {", "  int value;", "  Counter(int start) { value = start; }", "}", "Counter c = new Counter(3);"],
    fill: { lines: ["class Counter {", "  int value;", "  __0__(int start) { value = start; }", "}"], answers: ["Counter"] },
    starter: "public class ConstructorDemo {\n  static class Counter {\n    int value;\n    Counter(int start) { this.value = start; }\n  }\n  public static void main(String[] args) {\n    Counter c = new Counter(3);\n    System.out.println(c.value);\n  }\n}"
  },
  {
    title: "Numbers Matter",
    badge: "10",
    summary: "Work with math, formatting, wrapper classes, and class-level members.",
    concepts: ["static", "Math", "Integer", "format"],
    quiz: { prompt: "What does static mean for a field?", options: ["It belongs to the class", "It cannot change ever", "It stores only strings", "It is hidden from main"], answer: 0, explain: "A static field is shared at the class level." },
    drag: ["class Tally {", "  static int count = 0;", "  Tally() { count++; }", "}", "System.out.println(Tally.count);"],
    fill: { lines: ["double rounded = Math.__0__(4.7);", "System.out.println(rounded);"], answers: ["round"] },
    starter: "public class StaticNumbers {\n  static int count = 0;\n  StaticNumbers() { count++; }\n  public static void main(String[] args) {\n    new StaticNumbers();\n    new StaticNumbers();\n    System.out.println(count);\n    System.out.println(Math.round(4.7));\n  }\n}"
  },
  {
    title: "Risky Behavior",
    badge: "11",
    summary: "Handle risky code paths without pretending failure cannot happen.",
    concepts: ["try", "catch", "finally", "throw"],
    quiz: { prompt: "What block handles an exception thrown in try?", options: ["catch", "class", "static", "import"], answer: 0, explain: "catch receives matching exceptions from the try block." },
    drag: ["try {", "  int x = Integer.parseInt(\"42\");", "  System.out.println(x);", "} catch (NumberFormatException ex) {", "  System.out.println(\"bad number\");", "}"],
    fill: { lines: ["try {", "  Integer.parseInt(\"oops\");", "} __0__ (NumberFormatException ex) {", "  System.out.println(\"bad number\");", "}"], answers: ["catch"] },
    starter: "public class ExceptionDemo {\n  public static void main(String[] args) {\n    try {\n      int x = Integer.parseInt(\"oops\");\n      System.out.println(x);\n    } catch (NumberFormatException ex) {\n      System.out.println(\"bad number\");\n    }\n  }\n}"
  },
  {
    title: "A Very Graphic Story",
    badge: "12",
    summary: "Think in event-driven callbacks even if modern apps use newer UI frameworks.",
    concepts: ["event", "listener", "callback", "inner class"],
    quiz: { prompt: "In event-driven UI code, what usually starts an action?", options: ["An event such as a click", "A package name", "A private field alone", "A compiler warning"], answer: 0, explain: "Listeners react when events happen." },
    drag: ["button.addActionListener(listener);", "public void actionPerformed(ActionEvent e) {", "  System.out.println(\"clicked\");", "}"],
    fill: { lines: ["// A listener waits for an __0__ such as a click."], answers: ["event"] },
    starter: "public class EventThinking {\n  static interface ClickListener { void clicked(); }\n  public static void main(String[] args) {\n    ClickListener listener = new ClickListener() {\n      public void clicked() { System.out.println(\"clicked\"); }\n    };\n    listener.clicked();\n  }\n}"
  },
  {
    title: "Work on Your Swing",
    badge: "13",
    summary: "Understand components and layout managers as a mental model for arranging UI.",
    concepts: ["component", "layout", "panel", "button"],
    quiz: { prompt: "What does a layout manager decide?", options: ["Where components go", "Which exception to throw", "How many classes compile", "Whether ints are primitive"], answer: 0, explain: "Layouts arrange components in a container." },
    drag: ["JPanel panel = new JPanel();", "panel.add(button);", "frame.add(panel);", "frame.setVisible(true);"],
    fill: { lines: ["// A __0__ is a visible UI part such as a button."], answers: ["component"] },
    starter: "public class LayoutThinking {\n  public static void main(String[] args) {\n    String[] components = {\"button\", \"label\", \"text field\"};\n    for (String component : components) {\n      System.out.println(\"place \" + component);\n    }\n  }\n}"
  },
  {
    title: "Saving Objects",
    badge: "14",
    summary: "Move data into and out of programs while respecting streams and persistence.",
    concepts: ["stream", "serialize", "read", "write"],
    quiz: { prompt: "What is a stream in I/O?", options: ["A flow of data", "A subclass only", "A GUI button", "A loop keyword"], answer: 0, explain: "Streams represent data flowing from a source to a destination." },
    drag: ["String data = \"save me\";", "byte[] bytes = data.getBytes();", "System.out.println(bytes.length);"],
    fill: { lines: ["String data = \"Java\";", "byte[] bytes = data.__0__();"], answers: ["getBytes"] },
    starter: "public class IoThinking {\n  public static void main(String[] args) throws Exception {\n    String data = \"save me\";\n    byte[] bytes = data.getBytes(\"UTF-8\");\n    System.out.println(bytes.length);\n  }\n}"
  },
  {
    title: "Make a Connection",
    badge: "15",
    summary: "Model programs that wait, communicate, and do more than one task at a time.",
    concepts: ["Thread", "Runnable", "socket", "concurrency"],
    quiz: { prompt: "What is Runnable used for?", options: ["Code a thread can run", "A file format", "A GUI color", "An array index"], answer: 0, explain: "Runnable provides a run method for work that can be executed." },
    drag: ["Runnable job = new Runnable() {", "  public void run() { System.out.println(\"work\"); }", "};", "new Thread(job).start();"],
    fill: { lines: ["class Job implements __0__ {", "  public void run() { System.out.println(\"work\"); }", "}"], answers: ["Runnable"] },
    starter: "public class ThreadDemo {\n  public static void main(String[] args) throws Exception {\n    Runnable job = new Runnable() {\n      public void run() { System.out.println(\"work\"); }\n    };\n    Thread t = new Thread(job);\n    t.start();\n    t.join();\n  }\n}"
  },
  {
    title: "Data Structures",
    badge: "16",
    summary: "Choose collections based on lookup, order, uniqueness, and type safety.",
    concepts: ["List", "Set", "Map", "generic"],
    quiz: { prompt: "Which collection maps keys to values?", options: ["Map", "Set", "Thread", "JFrame"], answer: 0, explain: "Map stores key-value associations." },
    drag: ["HashMap<String, Integer> ages = new HashMap<String, Integer>();", "ages.put(\"Ada\", 36);", "System.out.println(ages.get(\"Ada\"));"],
    fill: { lines: ["HashMap<String, Integer> ages = new HashMap<String, Integer>();", "ages.__0__(\"Ada\", 36);"], answers: ["put"] },
    starter: "import java.util.HashMap;\n\npublic class MapDemo {\n  public static void main(String[] args) {\n    HashMap<String, Integer> ages = new HashMap<String, Integer>();\n    ages.put(\"Ada\", 36);\n    System.out.println(ages.get(\"Ada\"));\n  }\n}"
  },
  {
    title: "Release Your Code",
    badge: "17",
    summary: "Organize classes into packages and understand what it means to ship code.",
    concepts: ["package", "jar", "classpath", "main"],
    quiz: { prompt: "What does a package help with?", options: ["Organizing class names", "Changing int size", "Replacing constructors", "Catching every bug"], answer: 0, explain: "Packages group related classes and avoid name collisions." },
    drag: ["// package com.example.lab;", "public class App {", "  public static void main(String[] args) {", "    System.out.println(\"ship\");", "  }", "}"],
    fill: { lines: ["// A __0__ groups related classes and names."], answers: ["package"] },
    starter: "public class PackagingDemo {\n  public static void main(String[] args) {\n    String packageName = \"com.example.lab\";\n    System.out.println(\"ready to ship: \" + packageName);\n  }\n}"
  },
  {
    title: "Distributed Computing",
    badge: "18",
    summary: "Understand the big idea behind remote objects and service-style communication.",
    concepts: ["remote", "stub", "service", "protocol"],
    quiz: { prompt: "What is the core idea of distributed computing?", options: ["Objects or services communicate across processes or machines", "Everything must be static", "Arrays become unlimited", "Exceptions disappear"], answer: 0, explain: "Distributed systems involve communication across boundaries." },
    drag: ["Client asks for work", "Request travels over a protocol", "Service runs code", "Response returns to client"],
    fill: { lines: ["// A client talks to a remote __0__ through a protocol."], answers: ["service"] },
    starter: "public class DistributedIdea {\n  static String callService(String request) {\n    return \"response to \" + request;\n  }\n  public static void main(String[] args) {\n    System.out.println(callService(\"hello\"));\n  }\n}"
  }
);

const lessonExtras = [
  {
    title: "Program Shape",
    theory: [
      "A Java program is made of classes. For the classic command-line style, one public class contains a main method, and that method is where execution begins.",
      "The compiler checks syntax and types before the program runs. That means many mistakes are caught early: missing semicolons, unknown variables, wrong method calls, and class-name/file-name mismatches.",
      "System.out.print writes text and stays on the same line. System.out.println writes text and then moves to the next line. For many beginner output exercises, both can be valid depending on whether the newline matters."
    ],
    note: "Practice move: change one character, compile, and read the exact error. Java error messages become less scary when you treat them as coordinates.",
    quizzes: [
      {
        prompt: "Which method signature lets the JVM start a classic Java program?",
        options: ["public static void main(String[] args)", "start public void main(String args)", "public main(String[] args)", "static start(String[] args)"],
        answers: [0],
        explain: "The JVM looks for public static void main(String[] args)."
      },
      {
        prompt: "What is the job of javac?",
        options: ["Compile .java source into bytecode", "Run HTML in the browser", "Format only comments", "Download libraries automatically"],
        answers: [0],
        explain: "javac translates Java source into .class bytecode."
      },
      {
        prompt: "When would print and println both be reasonable?",
        options: ["When only the text value matters", "When the program must end immediately", "When a class has no methods", "When compiling without javac"],
        answers: [0],
        explain: "print and println differ by the trailing newline; sometimes the core answer is the same."
      }
    ],
    visual: "program"
  },
  {
    title: "Classes and Objects",
    theory: [
      "A class is the blueprint: it names fields for state and methods for behavior. An object is a live instance of that blueprint in memory.",
      "Multiple objects can come from the same class but keep separate field values. If two Dog objects have different names, each object stores its own name.",
      "Calling a method asks one object to do work. The same method can behave differently because it reads that object's current state."
    ],
    note: "Practice move: make two objects from one class and print both states before and after changing only one object.",
    quizzes: [
      {
        prompt: "A class is closest to which idea?",
        options: ["A blueprint for objects", "A finished object in memory", "A loop that repeats forever", "A package installer"],
        answers: [0],
        explain: "A class describes what objects know and do."
      },
      {
        prompt: "Which line creates a new object?",
        options: ["Dog d = new Dog();", "class Dog", "void bark()", "String name;"],
        answers: [0],
        explain: "new Dog() asks Java to create an instance."
      },
      {
        prompt: "Where does per-object state usually live?",
        options: ["In instance fields", "Inside the compiler", "Only in comments", "In import statements"],
        answers: [0],
        explain: "Instance fields store state for each object."
      }
    ],
    visual: "objects"
  },
  {
    title: "Values and References",
    theory: [
      "Primitive variables hold their values directly: an int variable holds an integer value, and assigning it copies that value.",
      "Object variables hold references. The object itself lives elsewhere, and the variable acts like a handle for reaching it.",
      "Arrays are objects too. An int[] variable is a reference to an array object, and indexes start at zero."
    ],
    note: "Practice move: copy an int, then copy an array reference. Change each original and compare what changed.",
    quizzes: [
      {
        prompt: "What does an object reference variable store?",
        options: ["A way to reach an object", "The whole object copied into the variable", "Only integers", "A compiler warning"],
        answers: [0],
        explain: "The object lives on the heap; the variable holds a reference to it."
      },
      {
        prompt: "What is the first index in a Java array?",
        options: ["0", "1", "-1", "array.length"],
        answers: [0],
        explain: "Java arrays are zero-indexed."
      },
      {
        prompt: "After int b = a, changing a later does what to b?",
        options: ["Nothing", "Always changes b too", "Deletes b", "Turns b into a reference"],
        answers: [0],
        explain: "Primitive assignment copies the value at that moment."
      }
    ],
    visual: "references"
  },
  {
    title: "Behavior and Decisions",
    theory: [
      "Methods package behavior behind a name. Parameters let a caller pass information in; return values let the method send information back.",
      "Conditionals choose a path. Loops repeat a path. Together, they turn static code into behavior that reacts to data.",
      "Small methods are easier to test in the runner. If a method is confusing, give it one job and print its input/output while learning."
    ],
    note: "Practice move: write a method that returns a value, then call it three times with different arguments.",
    quizzes: [
      {
        prompt: "Which keyword sends a value back from a method?",
        options: ["return", "break", "class", "new"],
        answers: [0],
        explain: "return exits the method and can hand a value back to the caller."
      },
      {
        prompt: "Which structure is best for repeating code while a counter changes?",
        options: ["for loop", "import", "class declaration", "field initializer only"],
        answers: [0],
        explain: "A for loop is built for counted repetition."
      },
      {
        prompt: "What does a parameter do?",
        options: ["Receives input for a method", "Compiles the class", "Creates a package", "Forces output to the console"],
        answers: [0],
        explain: "Parameters are method input variables."
      }
    ],
    visual: "flow"
  },
  {
    title: "Polymorphic Design",
    theory: [
      "Inheritance lets a subclass reuse and specialize behavior from a superclass. Overriding means the subclass supplies its own method body.",
      "Polymorphism lets a variable of a general type point to a specific object. Java chooses the overridden method at runtime.",
      "Interfaces focus on capability: any class that implements the interface promises to provide those methods."
    ],
    note: "Practice move: put different subclass objects in one superclass array and call the same method on each.",
    quizzes: [
      {
        prompt: "What does polymorphism let you do?",
        options: ["Treat different subclasses through a shared type", "Turn Java into JavaScript", "Skip compiling", "Store strings in an int"],
        answers: [0],
        explain: "A shared superclass or interface can call behavior supplied by many concrete classes."
      },
      {
        prompt: "Which keyword creates a subclass relationship?",
        options: ["extends", "return", "static", "new"],
        answers: [0],
        explain: "extends declares that one class inherits from another class."
      },
      {
        prompt: "When a subclass replaces a superclass method body, that is called:",
        options: ["Overriding", "Indexing", "Boxing only", "Importing"],
        answers: [0],
        explain: "Overriding supplies subclass-specific behavior."
      }
    ],
    visual: "inheritance"
  },
  {
    title: "Library Treasure Hunt",
    theory: [
      "The Java library is a giant toolbox. Learning Java is partly learning the language and partly learning how to search the API for classes that already solve common problems.",
      "import lets your code refer to library classes by short names. Without import, you can still use a fully qualified name such as java.util.ArrayList.",
      "ArrayList is a friendly first library class because it immediately shows why reusable code matters: you get a growable list without building one yourself."
    ],
    note: "Practice move: pick one java.util class, read three method names, and write a tiny program using one of them.",
    quizzes: [
      {
        prompt: "Why write ArrayList<String> instead of plain ArrayList?",
        options: ["The compiler can protect the element type", "It makes the list immutable", "It sorts automatically", "It disables methods"],
        answers: [0],
        explain: "Generics give compile-time type checks and reduce casting."
      },
      {
        prompt: "Which method appends an item to an ArrayList?",
        options: ["add", "pushBackOnly", "println", "length"],
        answers: [0],
        explain: "ArrayList uses add(element)."
      },
      {
        prompt: "Which call returns the number of elements in an ArrayList?",
        options: ["size()", "length", "count[]", "total()"],
        answers: [0],
        explain: "ArrayList has size(); arrays have length."
      }
    ],
    visual: "collections"
  }
];

lessonExtras.push(
  {
    title: "Reuse Without Tangles",
    theory: [
      "Inheritance is useful when one class is truly a specialized version of another. A Bike is a Vehicle; a Bike merely having a Wheel is composition, not inheritance.",
      "Overriding lets the subclass replace behavior while keeping the same method name and call shape.",
      "Good OO design keeps shared code high enough to reuse, but not so high that unrelated classes inherit behavior they do not need."
    ],
    note: "Practice move: say the relationship out loud. If 'is a' sounds fake, prefer a field instead of extends.",
    quizzes: [
      { prompt: "Which phrase best fits inheritance?", options: ["is-a", "has-a", "runs-at", "prints-to"], answers: [0], explain: "Inheritance models an is-a relationship." },
      { prompt: "What is overriding?", options: ["A subclass replacing a method body", "Creating an array", "Installing Java", "Sorting a list"], answers: [0], explain: "Overriding keeps the method signature but supplies specialized behavior." },
      { prompt: "If a Car contains an Engine, that is usually:", options: ["composition", "inheritance", "exception handling", "serialization"], answers: [0], explain: "Containing another object is a has-a relationship." }
    ],
    visual: "interface"
  },
  {
    title: "Promises and Partial Blueprints",
    theory: [
      "An abstract class can contain shared code and incomplete methods. You cannot instantiate it directly because it is not a full concrete object plan.",
      "An interface is a contract. It says what methods a class must provide, while leaving the implementation to that class.",
      "A variable typed as an interface can point at any object that implements that interface, which keeps code flexible."
    ],
    note: "Practice move: write two classes that implement one interface, then call both through the interface type.",
    quizzes: [
      { prompt: "Can you directly instantiate an abstract class?", options: ["No", "Yes, always", "Only if it has no fields", "Only inside a loop"], answers: [0], explain: "Abstract classes are incomplete by design." },
      { prompt: "Which keyword connects a class to an interface?", options: ["implements", "extends only", "throws", "return"], answers: [0], explain: "A class implements an interface." },
      { prompt: "Why use interface variables?", options: ["To depend on capability, not concrete class", "To remove all methods", "To avoid compiling", "To force static fields"], answers: [0], explain: "Interfaces let code work with any compatible implementation." }
    ],
    visual: "poly"
  },
  {
    title: "Birth of an Object",
    theory: [
      "new allocates an object, then the constructor initializes it. Constructor parameters are a clean way to require important starting values.",
      "this means the current object. It is especially helpful when a parameter name matches a field name.",
      "References let code reach objects on the heap. When nothing can reach an object anymore, it becomes eligible for garbage collection."
    ],
    note: "Practice move: add a constructor that refuses to leave an object half-initialized.",
    quizzes: [
      { prompt: "What does this.name usually mean?", options: ["The current object's name field", "A local variable only", "The package name", "The JVM version"], answers: [0], explain: "this points at the object whose method or constructor is running." },
      { prompt: "What does new do first conceptually?", options: ["Creates space for an object", "Deletes the class", "Runs every method", "Imports a package"], answers: [0], explain: "new creates an object, then construction initializes it." },
      { prompt: "When can an object be garbage collected?", options: ["When no live reference can reach it", "When it is static", "When it prints text", "When it has a constructor"], answers: [0], explain: "Reachability decides garbage collection eligibility." }
    ],
    visual: "constructor"
  },
  {
    title: "Class-Level Tools",
    theory: [
      "static members belong to the class rather than to one object. They are useful for shared constants, utility methods, and counters.",
      "Wrapper classes such as Integer and Double let primitive-like values participate where objects are needed.",
      "Math methods are static utility methods, so you call Math.round or Math.max without creating a Math object."
    ],
    note: "Practice move: count how many objects are created using a static field and a constructor.",
    quizzes: [
      { prompt: "Which call uses a static utility method?", options: ["Math.max(2, 9)", "new Math().max()", "int.max()", "String.new()"], answers: [0], explain: "Math methods are static." },
      { prompt: "Which wrapper matches int?", options: ["Integer", "IntBox", "NumberString", "Primitive"], answers: [0], explain: "Integer is the wrapper class for int." },
      { prompt: "A static counter is shared by:", options: ["All instances of the class", "Only one local method", "Only strings", "No code"], answers: [0], explain: "Static fields live at the class level." }
    ],
    visual: "statics"
  },
  {
    title: "Risky Code",
    theory: [
      "Exceptions are Java's way of making unusual or failed paths explicit. Instead of returning a mystery value, code can throw an object that describes the problem.",
      "try marks the risky zone. catch handles matching exception types. finally is for cleanup that should run whether the try succeeded or failed.",
      "Do not catch everything just to silence errors. Catch where you can recover or add useful context."
    ],
    note: "Practice move: intentionally parse a bad number, catch the exception, then print a helpful recovery message.",
    quizzes: [
      { prompt: "What object type represents many parse failures?", options: ["NumberFormatException", "StringBuilder", "ArrayList", "JPanel"], answers: [0], explain: "Bad numeric parsing can throw NumberFormatException." },
      { prompt: "What is finally for?", options: ["Cleanup code", "Starting main", "Declaring a field", "Making a class abstract"], answers: [0], explain: "finally runs after try/catch flow." },
      { prompt: "Where should risky code go?", options: ["try", "package", "extends", "interface only"], answers: [0], explain: "try surrounds code that may throw." }
    ],
    visual: "exceptions"
  },
  {
    title: "Event Thinking",
    theory: [
      "GUI programs are event-driven: most code waits until something happens, such as a click or key press.",
      "A listener object contains callback methods. The UI framework calls those methods when the matching event occurs.",
      "Inner classes and anonymous classes are convenient for small listener implementations because the behavior often belongs right next to the UI setup."
    ],
    note: "Practice move: simulate a click by creating a tiny listener interface and calling its method yourself.",
    quizzes: [
      { prompt: "What does a listener do?", options: ["Responds to events", "Compiles bytecode", "Stores only integers", "Deletes UI"], answers: [0], explain: "Listeners react to events." },
      { prompt: "A callback is called by:", options: ["The framework or other code when something happens", "Only the compiler", "Only the package statement", "The garbage collector every line"], answers: [0], explain: "Callbacks run when the surrounding system invokes them." },
      { prompt: "A button click is an example of:", options: ["event", "constructor", "generic type", "jar file"], answers: [0], explain: "Clicks are UI events." }
    ],
    visual: "events"
  },
  {
    title: "Layout Mental Models",
    theory: [
      "A component is a visible or interactive UI part. A container holds components. A layout manager decides how the container arranges its children.",
      "Swing is older, but the ideas still matter: composition of widgets, event handlers, and layout rules appear in nearly every UI toolkit.",
      "Layout code is easier to reason about when you separate what exists from where it goes and what it does when clicked."
    ],
    note: "Practice move: sketch a UI as containers and components before writing any code.",
    quizzes: [
      { prompt: "Which is a component?", options: ["Button", "catch block", "int literal", "classpath"], answers: [0], explain: "Buttons are UI components." },
      { prompt: "What does a container do?", options: ["Holds components", "Throws every exception", "Stores bytecode only", "Replaces javac"], answers: [0], explain: "Containers group UI elements." },
      { prompt: "Why use layout managers?", options: ["To arrange components predictably", "To parse numbers", "To create threads", "To serialize objects"], answers: [0], explain: "Layouts decide placement and sizing." }
    ],
    visual: "layout"
  },
  {
    title: "Data In, Data Out",
    theory: [
      "I/O means input and output: reading data from somewhere and writing data somewhere else.",
      "Streams let programs process data as a flow. That matters when data may be larger than memory or arrives over time.",
      "Serialization stores object state, but it should be used thoughtfully. For many modern apps, explicit formats such as JSON are easier to evolve."
    ],
    note: "Practice move: convert a String to bytes, print the byte count, then convert the bytes back to a String.",
    quizzes: [
      { prompt: "What does output mean?", options: ["Data leaving the program", "A subclass", "A constructor parameter", "An interface"], answers: [0], explain: "Output is data written somewhere." },
      { prompt: "What does serialization store?", options: ["Object state", "Only comments", "Compiler warnings", "Monitor brightness"], answers: [0], explain: "Serialization turns object state into a storable form." },
      { prompt: "Why close streams?", options: ["To release resources", "To inherit methods", "To make ints larger", "To hide variables"], answers: [0], explain: "Streams often hold external resources." }
    ],
    visual: "io"
  },
  {
    title: "Waiting and Working",
    theory: [
      "Networking code waits for data from another process. Threading lets a program keep doing useful work while something else waits or runs.",
      "A Thread runs a task. A Runnable packages the task. Starting a thread asks Java to run that task separately from the current call path.",
      "Concurrency can make programs more responsive, but shared state becomes risky. Start with tiny examples and avoid sharing mutable data until you understand the flow."
    ],
    note: "Practice move: run a thread, call join, and prove main waited for the background task to finish.",
    quizzes: [
      { prompt: "Which method begins a thread?", options: ["start()", "runNowOnly()", "compile()", "package()"], answers: [0], explain: "start asks the JVM to begin the new thread." },
      { prompt: "What does join do?", options: ["Waits for a thread to finish", "Combines strings only", "Creates a package", "Handles a click"], answers: [0], explain: "join makes one thread wait for another." },
      { prompt: "Why is shared mutable state tricky?", options: ["Multiple threads may change it at unpredictable times", "It cannot compile", "It is always private", "It prevents objects"], answers: [0], explain: "Interleaving makes shared state hard." }
    ],
    visual: "threads"
  },
  {
    title: "Choosing the Right Collection",
    theory: [
      "List preserves order and allows duplicates. Set focuses on uniqueness. Map connects keys to values.",
      "Generics make collection intent visible and enforceable. A Map<String, Integer> clearly says names map to numbers.",
      "Data structure choice changes code shape: search, insertion, ordering, uniqueness, and lookup all matter."
    ],
    note: "Practice move: store the same data in a List, Set, and Map, then notice what each one makes easy.",
    quizzes: [
      { prompt: "Which collection rejects duplicates by design?", options: ["Set", "List", "Thread", "Button"], answers: [0], explain: "A Set stores unique elements." },
      { prompt: "Which collection uses keys?", options: ["Map", "Array only", "Runnable", "Math"], answers: [0], explain: "A Map stores key-value pairs." },
      { prompt: "Which collection preserves insertion order by index?", options: ["List", "Set always", "Map always", "Exception"], answers: [0], explain: "List has indexed ordered elements." }
    ],
    visual: "dataStructures"
  },
  {
    title: "Shipping Code",
    theory: [
      "Packages organize classes into namespaces. They help avoid naming collisions as projects grow.",
      "A JAR bundles compiled classes and resources. A manifest can identify the main class for command-line execution.",
      "The classpath tells Java where to find classes. Many beginner deployment bugs are really classpath or package-name mismatches."
    ],
    note: "Practice move: write a pretend package name and map how it would translate to folders.",
    quizzes: [
      { prompt: "What does JAR stand for conceptually?", options: ["A bundle of Java classes/resources", "A loop type", "A memory address", "A primitive wrapper"], answers: [0], explain: "A JAR packages compiled Java output." },
      { prompt: "What does classpath help Java find?", options: ["Classes", "Screen pixels", "Loop counters", "Mouse clicks"], answers: [0], explain: "Classpath points to compiled classes and libraries." },
      { prompt: "What does a package name reduce?", options: ["Name collisions", "Need for constructors", "All exceptions", "Memory to zero"], answers: [0], explain: "Packages namespace classes." }
    ],
    visual: "packaging"
  },
  {
    title: "Across the Boundary",
    theory: [
      "Distributed computing is about calling across a boundary: another process, machine, or service.",
      "The caller cares about the contract: what request to send and what response to expect. The service owns the actual implementation.",
      "Older Java technologies like RMI and EJB are useful historically, but the durable lesson is service boundaries, protocols, latency, and failure."
    ],
    note: "Practice move: write a method named callService, then treat it as if it were remote: validate input and handle failure.",
    quizzes: [
      { prompt: "What makes remote calls different from local method calls?", options: ["Network/process boundaries can fail or be slow", "They never return", "They require arrays", "They cannot use strings"], answers: [0], explain: "Distributed calls cross unreliable boundaries." },
      { prompt: "What is a service contract?", options: ["The agreed request and response shape", "A loop rule", "A constructor body", "A Swing panel"], answers: [0], explain: "Contracts describe how callers and services communicate." },
      { prompt: "What should distributed code expect?", options: ["Latency and failure", "Perfect instant calls", "No exceptions", "Only static fields"], answers: [0], explain: "Remote boundaries introduce delay and failure." }
    ],
    visual: "distributed"
  }
);

const crossword = {
  rows: 9,
  cols: 8,
  words: [
    { number: 1, answer: "LOOP", row: 0, col: 0, dir: "across", clue: "Repeats a block while its rule allows it." },
    { number: 2, answer: "OBJECT", row: 0, col: 1, dir: "down", clue: "Live instance created from a class." },
    { number: 3, answer: "METHOD", row: 3, col: 0, dir: "across", clue: "Named behavior a class or object can run." },
    { number: 4, answer: "CLASS", row: 4, col: 1, dir: "across", clue: "Blueprint that defines fields and methods." },
    { number: 5, answer: "ARRAY", row: 4, col: 3, dir: "down", clue: "Fixed-size indexed collection." },
    { number: 6, answer: "STATIC", row: 7, col: 1, dir: "across", clue: "Belongs to the class rather than one instance." }
  ]
};

let currentModule = 0;
let progressByModule = JSON.parse(localStorage.getItem("javaLabProgressByModule") || "{}");
if (!localStorage.getItem("javaLabProgressByModule") && localStorage.getItem("javaLabScore")) {
  progressByModule[0] = Number(localStorage.getItem("javaLabScore") || 0);
  localStorage.setItem("javaLabProgressByModule", JSON.stringify(progressByModule));
}
let selectedQuiz = null;
let currentQuiz = null;
let draggedItem = null;
let runnerEnabled = true;
let compilerProvider = "local";

const $ = selector => document.querySelector(selector);
const appConfig = window.JAVA_LAB_CONFIG || {};
const javaFacts = [
  "Java bytecode runs on the JVM, which is why the same compiled class can run on different operating systems with a compatible JVM.",
  "String objects are immutable, so methods like toUpperCase return a new String instead of changing the old one.",
  "Array indexes start at 0 because the index is an offset from the beginning of the array.",
  "A constructor has no return type, not even void.",
  "Overridden methods are chosen by the actual object at runtime, not just the reference type.",
  "ArrayList has size(), but arrays use length without parentheses.",
  "static belongs to the class; non-static belongs to each object.",
  "try/catch is for recovery or useful context, not for hiding every problem.",
  "Interfaces let unrelated classes share a capability without sharing a superclass.",
  "Thread.start() begins a new thread; calling run() directly is just an ordinary method call."
];

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getModuleScore(index = currentModule) {
  return Number(progressByModule[index] || 0);
}

function getOverallScore() {
  if (!modules.length) return 0;
  const total = modules.reduce((sum, _module, index) => sum + getModuleScore(index), 0);
  return Math.round(total / modules.length);
}

function award(points) {
  const currentScore = getModuleScore();
  progressByModule[currentModule] = Math.min(100, currentScore + points);
  localStorage.setItem("javaLabProgressByModule", JSON.stringify(progressByModule));
  updateProgress();
}

function updateProgress() {
  const moduleScore = getModuleScore();
  const overallScore = getOverallScore();
  $("#scoreValue").textContent = moduleScore;
  $("#meterFill").style.width = `${moduleScore}%`;
  $("#progressText").textContent = moduleScore >= 80
    ? `Chapter ${modules[currentModule].badge} is humming. Overall course charge: ${overallScore}%.`
    : `Chapter ${modules[currentModule].badge} charge: ${moduleScore}%. Overall course charge: ${overallScore}%.`;
}

function renderModules() {
  $("#moduleNav").innerHTML = modules.map((module, index) => `
    <button class="module-button ${index === currentModule ? "active" : ""}" data-module="${index}">
      ${module.badge}. ${module.title}
      <span>${module.concepts.slice(0, 3).join(" / ")}</span>
    </button>
  `).join("");

  document.querySelectorAll(".module-button").forEach(button => {
    button.addEventListener("click", () => {
      currentModule = Number(button.dataset.module);
      selectedQuiz = null;
      currentQuiz = null;
      renderAll();
    });
  });
}

function renderLesson() {
  const module = modules[currentModule];
  $("#lessonTitle").textContent = module.title;
  $("#lessonBadge").textContent = module.badge;
  $("#lessonText").textContent = module.summary;
  $("#conceptChips").innerHTML = module.concepts.map(concept => `<span class="chip">${concept}</span>`).join("");
}

function renderTheory() {
  const extra = lessonExtras[currentModule];
  const moves = getCoreMoves(currentModule);
  const missions = getPracticeMissions(currentModule);
  $("#theoryTitle").textContent = extra.title;
  $("#visualTitle").textContent = modules[currentModule].title;
  $("#theoryBody").innerHTML = `
    ${extra.theory.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}
    <h3>Core moves</h3>
    <ul>${moves.map(move => `<li>${escapeHtml(move)}</li>`).join("")}</ul>
    <h3>Practice missions</h3>
    <div class="mission-list">
      ${missions.map((mission, index) => `
        <div class="mission-card">
          <strong>${escapeHtml(mission.title)}</strong>
          <p>${escapeHtml(mission.goal)}</p>
          <button class="tab load-mission" data-mission="${index}">Load in Runner</button>
        </div>
      `).join("")}
    </div>
    <div class="theory-note">${escapeHtml(extra.note)}</div>
    <div class="source-note">Source note: this app follows the beginner Java topic arc of Head First Java, 2nd ed. by Kathy Sierra and Bert Bates, but the explanations and diagrams here are original study material.</div>
  `;
  $("#lessonVisual").innerHTML = renderVisual(extra.visual);
  document.querySelectorAll(".load-mission").forEach(button => {
    button.addEventListener("click", () => {
      const mission = missions[Number(button.dataset.mission)];
      $("#javaEditor").value = mission.code;
      $("#runnerOutput").textContent = "Mission loaded. Open Java Runner and run or modify it.";
      document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
      document.querySelectorAll(".activity").forEach(item => item.classList.remove("active"));
      document.querySelector('[data-tab="runner"]').classList.add("active");
      $("#runner").classList.add("active");
      $("#runner").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderQuiz() {
  const quizBank = lessonExtras[currentModule].quizzes;
  const previousPrompt = currentQuiz ? currentQuiz.prompt : "";
  const candidates = quizBank.filter(quiz => quiz.prompt !== previousPrompt);
  const picked = shuffle(candidates.length ? candidates : quizBank)[0];
  const optionPairs = shuffle(picked.options.map((text, index) => ({
    text,
    correct: (picked.answers || [picked.answer]).includes(index)
  })));
  currentQuiz = {
    ...picked,
    options: optionPairs.map(option => option.text),
    answers: optionPairs.map((option, index) => option.correct ? index : -1).filter(index => index >= 0)
  };
  const quiz = currentQuiz || modules[currentModule].quiz;
  $("#quizPrompt").textContent = quiz.prompt;
  $("#quizFeedback").textContent = "";
  $("#quizOptions").innerHTML = quiz.options.map((option, index) => `
    <button class="option-card" data-option="${index}">${option}</button>
  `).join("");

  document.querySelectorAll(".option-card").forEach(card => {
    card.addEventListener("click", () => {
      selectedQuiz = Number(card.dataset.option);
      document.querySelectorAll(".option-card").forEach(item => item.classList.remove("selected"));
      card.classList.add("selected");
    });
  });
}

function renderDrag() {
  const module = modules[currentModule];
  $("#dragFeedback").textContent = "";
  $("#dragList").innerHTML = shuffle(module.drag).map(line => `
    <div class="drag-item" draggable="true">${escapeHtml(line)}</div>
  `).join("");
  document.querySelectorAll(".drag-item").forEach(item => {
    item.addEventListener("dragstart", () => {
      draggedItem = item;
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
      draggedItem = null;
    });
    item.addEventListener("dragover", event => {
      event.preventDefault();
      const list = $("#dragList");
      const after = getDragAfterElement(list, event.clientY);
      if (!after) list.appendChild(draggedItem);
      else list.insertBefore(draggedItem, after);
    });
  });
}

function getDragAfterElement(container, y) {
  const elements = [...container.querySelectorAll(".drag-item:not(.dragging)")];
  return elements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) return { offset, element: child };
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function renderFill() {
  const fill = modules[currentModule].fill;
  $("#fillFeedback").textContent = "";
  $("#fillChallenge").innerHTML = fill.lines.map(line => {
    return escapeHtml(line).replace(/__([0-9]+)__/g, (_, index) => {
      return `<input class="blank-input" data-blank="${index}" aria-label="Code blank ${Number(index) + 1}">`;
    });
  }).join("<br>");
}

function renderRunner() {
  $("#javaEditor").value = modules[currentModule].starter;
  const readyText = compilerProvider === "judge0"
    ? "Ready. Using the configured Judge0-compatible compiler backend."
    : "Ready. Using the local Java runner.";
  $("#runnerOutput").textContent = runnerEnabled ? readyText : "Java runner is disabled on this deployment.";
  $("#runJava").disabled = !runnerEnabled;
}

function renderCrossword() {
  const occupied = new Map();
  const starts = new Map();
  crossword.words.forEach(word => {
    starts.set(`${word.row},${word.col}`, word.number);
    [...word.answer].forEach((letter, index) => {
      const row = word.row + (word.dir === "down" ? index : 0);
      const col = word.col + (word.dir === "across" ? index : 0);
      occupied.set(`${row},${col}`, letter);
    });
  });

  let html = "";
  const grid = $("#crosswordGrid");
  grid.style.setProperty("--crossword-cols", crossword.cols);
  for (let row = 0; row < crossword.rows; row++) {
    for (let col = 0; col < crossword.cols; col++) {
      const key = `${row},${col}`;
      if (!occupied.has(key)) {
        html += `<div class="cell block"></div>`;
      } else {
        html += `<label class="cell"><small>${starts.get(key) || ""}</small><input maxlength="1" data-cell="${key}" data-answer="${occupied.get(key)}" aria-label="Crossword row ${row + 1} column ${col + 1}"></label>`;
      }
    }
  }
  grid.innerHTML = html;
  $("#acrossClues").innerHTML = crossword.words
    .filter(word => word.dir === "across")
    .map(word => `<li value="${word.number}">${word.clue}</li>`)
    .join("");
  $("#downClues").innerHTML = crossword.words
    .filter(word => word.dir === "down")
    .map(word => `<li value="${word.number}">${word.clue}</li>`)
    .join("");
  $("#crosswordFeedback").textContent = "";
  document.querySelectorAll(".cell input").forEach(input => {
    input.addEventListener("input", () => {
      input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "");
    });
  });
}

function renderVisual(type) {
  const visuals = {
    program: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Java source compiles to bytecode and runs on the JVM">
        <rect x="24" y="38" width="132" height="92" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="52" y="76" font-size="18" font-weight="800">.java</text>
        <text x="45" y="104" font-size="13">source code</text>
        <path d="M168 84h72" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M220 60l34 24-34 24" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="260" y="38" width="132" height="92" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="285" y="76" font-size="18" font-weight="800">.class</text>
        <text x="286" y="104" font-size="13">bytecode</text>
        <path d="M326 142v56" stroke="#0f9d82" stroke-width="8" stroke-linecap="round"/>
        <path d="M304 182l22 28 22-28" fill="none" stroke="#0f9d82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="206" y="212" width="236" height="62" rx="8" fill="#172226"/>
        <text x="250" y="250" fill="#fff" font-size="20" font-weight="800">JVM runs it</text>
      </svg>`,
    objects: `
      <svg viewBox="0 0 520 320" role="img" aria-label="One class blueprint creates two separate objects">
        <rect x="34" y="38" width="150" height="210" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="74" y="72" font-size="19" font-weight="800">Dog class</text>
        <line x1="58" y1="94" x2="160" y2="94" stroke="#182024" stroke-width="3"/>
        <text x="62" y="128" font-size="15">String name</text>
        <text x="62" y="164" font-size="15">void bark()</text>
        <path d="M202 112h70M202 182h70" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M250 88l34 24-34 24M250 158l34 24-34 24" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="304" y="68" width="156" height="82" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="328" y="100" font-size="17" font-weight="800">Dog object</text>
        <text x="328" y="126" font-size="14">name = Ada</text>
        <rect x="304" y="178" width="156" height="82" rx="8" fill="#ebfff8" stroke="#182024" stroke-width="4"/>
        <text x="328" y="210" font-size="17" font-weight="800">Dog object</text>
        <text x="328" y="236" font-size="14">name = Grace</text>
      </svg>`,
    references: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Primitive values copy directly while references point to objects">
        <rect x="28" y="42" width="180" height="82" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="50" y="76" font-size="16" font-weight="800">int score</text>
        <text x="66" y="104" font-size="24">10</text>
        <rect x="28" y="172" width="180" height="82" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="50" y="206" font-size="16" font-weight="800">int[] scores</text>
        <path d="M178 214h86" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M244 190l34 24-34 24" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="300" y="178" width="56" height="56" fill="#ffffff" stroke="#182024" stroke-width="4"/>
        <rect x="356" y="178" width="56" height="56" fill="#ffffff" stroke="#182024" stroke-width="4"/>
        <rect x="412" y="178" width="56" height="56" fill="#ffffff" stroke="#182024" stroke-width="4"/>
        <text x="321" y="214" font-size="20" font-weight="800">4</text>
        <text x="377" y="214" font-size="20" font-weight="800">7</text>
        <text x="433" y="214" font-size="20" font-weight="800">9</text>
      </svg>`,
    flow: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Method input flows through logic and returns a value">
        <rect x="34" y="48" width="110" height="62" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="68" y="86" font-size="18" font-weight="800">input</text>
        <path d="M156 80h70" stroke="#0f9d82" stroke-width="8" stroke-linecap="round"/>
        <path d="M206 56l34 24-34 24" fill="none" stroke="#0f9d82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="260" y="38" width="170" height="82" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="295" y="73" font-size="18" font-weight="800">method</text>
        <text x="286" y="98" font-size="13">if / loop / math</text>
        <path d="M346 132v54" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M324 172l22 28 22-28" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="262" y="214" width="166" height="62" rx="8" fill="#172226"/>
        <text x="304" y="252" fill="#fff" font-size="18" font-weight="800">return</text>
      </svg>`,
    poly: `
      <svg viewBox="0 0 520 320" role="img" aria-label="A general animal reference points at different subclass objects">
        <rect x="176" y="26" width="170" height="64" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="222" y="65" font-size="18" font-weight="800">Animal</text>
        <path d="M230 102l-88 68M292 102l88 68" stroke="#0f9d82" stroke-width="7" stroke-linecap="round"/>
        <rect x="56" y="184" width="154" height="72" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="111" y="214" font-size="18" font-weight="800">Cat</text>
        <text x="88" y="240" font-size="13">speak() = meow</text>
        <rect x="314" y="184" width="154" height="72" rx="8" fill="#ebfff8" stroke="#182024" stroke-width="4"/>
        <text x="366" y="214" font-size="18" font-weight="800">Robot</text>
        <text x="342" y="240" font-size="13">speak() = beep</text>
      </svg>`,
    collections: `
      <svg viewBox="0 0 520 320" role="img" aria-label="ArrayList grows and stores typed elements">
        <text x="46" y="56" font-size="19" font-weight="800">ArrayList&lt;String&gt;</text>
        <rect x="44" y="82" width="96" height="70" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <rect x="152" y="82" width="96" height="70" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <rect x="260" y="82" width="96" height="70" rx="8" fill="#ebfff8" stroke="#182024" stroke-width="4"/>
        <rect x="368" y="82" width="96" height="70" rx="8" fill="#ffffff" stroke="#99a7a0" stroke-width="4" stroke-dasharray="8 6"/>
        <text x="76" y="124" font-size="16" font-weight="800">Ada</text>
        <text x="176" y="124" font-size="16" font-weight="800">Grace</text>
        <text x="286" y="124" font-size="16" font-weight="800">Lin</text>
        <path d="M108 196h260" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M348 172l34 24-34 24" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="150" y="246" font-size="16">add() grows the list</text>
      </svg>`,
    inheritance: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Inheritance and composition design choices">
        <rect x="174" y="26" width="172" height="58" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="222" y="62" font-size="18" font-weight="800">Vehicle</text>
        <path d="M260 96v48" stroke="#0f9d82" stroke-width="7" stroke-linecap="round"/>
        <path d="M240 130l20 24 20-24" fill="none" stroke="#0f9d82" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="174" y="164" width="172" height="58" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="232" y="200" font-size="18" font-weight="800">Bike</text>
        <rect x="42" y="230" width="122" height="54" rx="8" fill="#ebfff8" stroke="#182024" stroke-width="4"/>
        <text x="75" y="263" font-size="16" font-weight="800">Wheel</text>
        <path d="M174 222l-42 22" stroke="#e5533d" stroke-width="6" stroke-linecap="round"/>
        <text x="183" y="258" font-size="14">is-a upward</text>
        <text x="48" y="304" font-size="14">has-a sideways</text>
      </svg>`,
    interface: `
      <svg viewBox="0 0 520 320" role="img" aria-label="An interface contract implemented by multiple classes">
        <rect x="154" y="32" width="212" height="62" rx="8" fill="#172226"/>
        <text x="198" y="70" fill="#fff" font-size="18" font-weight="800">Playable</text>
        <text x="208" y="88" fill="#8ff0d2" font-size="12">play()</text>
        <path d="M220 106l-92 76M300 106l92 76" stroke="#f4b942" stroke-width="7" stroke-linecap="round"/>
        <rect x="50" y="196" width="154" height="72" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="93" y="226" font-size="18" font-weight="800">Song</text>
        <text x="84" y="250" font-size="13">play = audio</text>
        <rect x="316" y="196" width="154" height="72" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="354" y="226" font-size="18" font-weight="800">Video</text>
        <text x="348" y="250" font-size="13">play = screen</text>
      </svg>`,
    constructor: `
      <svg viewBox="0 0 520 320" role="img" aria-label="new allocates memory and constructor initializes fields">
        <rect x="34" y="54" width="116" height="64" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="62" y="92" font-size="18" font-weight="800">new</text>
        <path d="M166 86h72" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M218 62l34 24-34 24" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="270" y="34" width="190" height="108" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="302" y="68" font-size="18" font-weight="800">heap object</text>
        <text x="306" y="98" font-size="14">name = null</text>
        <text x="306" y="120" font-size="14">score = 0</text>
        <path d="M365 154v42" stroke="#0f9d82" stroke-width="8" stroke-linecap="round"/>
        <path d="M343 184l22 24 22-24" fill="none" stroke="#0f9d82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="270" y="220" width="190" height="62" rx="8" fill="#ebfff8" stroke="#182024" stroke-width="4"/>
        <text x="306" y="257" font-size="16" font-weight="800">constructor fills fields</text>
      </svg>`,
    statics: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Static class members shared by instances">
        <rect x="164" y="28" width="192" height="76" rx="8" fill="#172226"/>
        <text x="204" y="60" fill="#fff" font-size="18" font-weight="800">Tally class</text>
        <text x="204" y="86" fill="#f4b942" font-size="14">static count = 2</text>
        <path d="M220 116l-86 76M300 116l86 76" stroke="#0f9d82" stroke-width="7" stroke-linecap="round"/>
        <rect x="54" y="206" width="154" height="66" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="94" y="244" font-size="18" font-weight="800">object A</text>
        <rect x="312" y="206" width="154" height="66" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="352" y="244" font-size="18" font-weight="800">object B</text>
        <circle cx="76" cy="76" r="24" fill="#ebfff8" stroke="#182024" stroke-width="4"/>
        <text x="54" y="82" font-size="13">Math</text>
      </svg>`,
    exceptions: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Try catch finally exception path">
        <rect x="48" y="54" width="120" height="74" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="87" y="98" font-size="19" font-weight="800">try</text>
        <path d="M184 92h72" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M236 68l34 24-34 24" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="286" y="54" width="150" height="74" rx="8" fill="#ffe5df" stroke="#182024" stroke-width="4"/>
        <text x="327" y="98" font-size="19" font-weight="800">catch</text>
        <path d="M362 140v52" stroke="#0f9d82" stroke-width="8" stroke-linecap="round"/>
        <path d="M340 178l22 26 22-26" fill="none" stroke="#0f9d82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="224" y="216" width="188" height="62" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="272" y="253" font-size="18" font-weight="800">finally</text>
        <path d="M104 140c28 38 70 58 126 60" fill="none" stroke="#f4b942" stroke-width="6" stroke-linecap="round" stroke-dasharray="10 8"/>
      </svg>`,
    events: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Button event travels to listener callback">
        <rect x="48" y="62" width="130" height="74" rx="10" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <circle cx="82" cy="98" r="14" fill="#e5533d"/>
        <text x="112" y="104" font-size="17" font-weight="800">click</text>
        <path d="M196 100h80" stroke="#0f9d82" stroke-width="8" stroke-linecap="round"/>
        <path d="M256 76l34 24-34 24" fill="none" stroke="#0f9d82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="312" y="50" width="160" height="98" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="344" y="86" font-size="18" font-weight="800">listener</text>
        <text x="340" y="116" font-size="14">actionPerformed()</text>
        <path d="M392 160v56" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M370 202l22 26 22-26" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="290" y="238" width="204" height="50" rx="8" fill="#172226"/>
        <text x="326" y="269" fill="#fff" font-size="16" font-weight="800">callback runs code</text>
      </svg>`,
    layout: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Swing container layout with components">
        <rect x="54" y="38" width="412" height="238" rx="10" fill="#fffdf7" stroke="#182024" stroke-width="5"/>
        <rect x="78" y="72" width="364" height="42" rx="6" fill="#172226"/>
        <text x="218" y="99" fill="#fff" font-size="17" font-weight="800">JFrame</text>
        <rect x="88" y="140" width="110" height="82" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <rect x="218" y="140" width="110" height="82" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <rect x="348" y="140" width="78" height="82" rx="8" fill="#ebfff8" stroke="#182024" stroke-width="4"/>
        <text x="116" y="186" font-size="15">Button</text>
        <text x="252" y="186" font-size="15">Label</text>
        <text x="362" y="186" font-size="15">Field</text>
        <path d="M92 240h324" stroke="#f4b942" stroke-width="8" stroke-linecap="round"/>
        <text x="184" y="264" font-size="14">layout manager arranges</text>
      </svg>`,
    io: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Data stream flows from object to bytes to storage">
        <rect x="42" y="72" width="126" height="74" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="78" y="116" font-size="18" font-weight="800">object</text>
        <path d="M184 110h72" stroke="#0f9d82" stroke-width="8" stroke-linecap="round"/>
        <path d="M236 86l34 24-34 24" fill="none" stroke="#0f9d82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="286" y="72" width="142" height="74" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="326" y="108" font-size="18" font-weight="800">bytes</text>
        <text x="306" y="130" font-size="13">stream flow</text>
        <path d="M356 158v54" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M334 198l22 26 22-26" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="248" y="236" width="216" height="50" rx="8" fill="#172226"/>
        <text x="302" y="267" fill="#fff" font-size="16" font-weight="800">file / network</text>
      </svg>`,
    threads: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Main thread starts worker thread and waits with join">
        <rect x="42" y="68" width="140" height="56" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="74" y="102" font-size="18" font-weight="800">main</text>
        <path d="M192 96h84" stroke="#0f9d82" stroke-width="8" stroke-linecap="round"/>
        <path d="M256 72l34 24-34 24" fill="none" stroke="#0f9d82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="312" y="68" width="154" height="56" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="348" y="102" font-size="18" font-weight="800">worker</text>
        <path d="M390 140v72" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M112 140v72" stroke="#f4b942" stroke-width="8" stroke-linecap="round" stroke-dasharray="10 8"/>
        <rect x="70" y="230" width="374" height="54" rx="8" fill="#172226"/>
        <text x="130" y="263" fill="#fff" font-size="16" font-weight="800">join waits until worker finishes</text>
      </svg>`,
    dataStructures: `
      <svg viewBox="0 0 520 320" role="img" aria-label="List Set and Map collection choices">
        <rect x="34" y="52" width="128" height="96" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="78" y="82" font-size="18" font-weight="800">List</text>
        <text x="60" y="112" font-size="13">0 Ada</text>
        <text x="60" y="132" font-size="13">1 Ada</text>
        <rect x="196" y="52" width="128" height="96" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="238" y="82" font-size="18" font-weight="800">Set</text>
        <circle cx="238" cy="116" r="12" fill="#0f9d82"/>
        <circle cx="278" cy="116" r="12" fill="#e5533d"/>
        <rect x="358" y="52" width="128" height="96" rx="8" fill="#ebfff8" stroke="#182024" stroke-width="4"/>
        <text x="398" y="82" font-size="18" font-weight="800">Map</text>
        <text x="382" y="114" font-size="13">Ada -> 36</text>
        <text x="382" y="134" font-size="13">Lin -> 29</text>
        <path d="M88 200h344" stroke="#f4b942" stroke-width="8" stroke-linecap="round"/>
        <text x="126" y="238" font-size="15">order / uniqueness / lookup</text>
      </svg>`,
    packaging: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Packages compile into classes bundled into a jar">
        <rect x="42" y="46" width="132" height="78" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="72" y="82" font-size="17" font-weight="800">package</text>
        <text x="70" y="104" font-size="12">com.lab</text>
        <path d="M190 86h58" stroke="#0f9d82" stroke-width="8" stroke-linecap="round"/>
        <path d="M228 62l34 24-34 24" fill="none" stroke="#0f9d82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="282" y="46" width="132" height="78" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="318" y="82" font-size="17" font-weight="800">.class</text>
        <path d="M348 138v48" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M326 172l22 26 22-26" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="214" y="212" width="190" height="66" rx="12" fill="#172226"/>
        <text x="278" y="252" fill="#fff" font-size="20" font-weight="800">app.jar</text>
      </svg>`,
    distributed: `
      <svg viewBox="0 0 520 320" role="img" aria-label="Client request crosses network boundary to service and returns response">
        <rect x="42" y="80" width="128" height="78" rx="8" fill="#fff8df" stroke="#182024" stroke-width="4"/>
        <text x="78" y="126" font-size="18" font-weight="800">client</text>
        <path d="M188 104h128" stroke="#0f9d82" stroke-width="8" stroke-linecap="round"/>
        <path d="M296 80l34 24-34 24" fill="none" stroke="#0f9d82" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M330 146H202" stroke="#e5533d" stroke-width="8" stroke-linecap="round"/>
        <path d="M222 122l-34 24 34 24" fill="none" stroke="#e5533d" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="350" y="80" width="128" height="78" rx="8" fill="#eaf7ff" stroke="#182024" stroke-width="4"/>
        <text x="380" y="126" font-size="18" font-weight="800">service</text>
        <line x1="260" y1="42" x2="260" y2="246" stroke="#172226" stroke-width="4" stroke-dasharray="8 8"/>
        <text x="205" y="274" font-size="14">latency + failure live here</text>
      </svg>`
  };
  return visuals[type] || visuals.program;
}

function getCoreMoves(index) {
  return [
    [
      "Recognize the public class, main method, statements, strings, and semicolons.",
      "Predict the difference between print and println before running the code.",
      "Use compiler errors as location hints instead of treating them as failure."
    ],
    [
      "Name what the class knows as fields and what it does as methods.",
      "Create two objects from one class and verify that their fields are separate.",
      "Move behavior into methods instead of leaving everything in main."
    ],
    [
      "Distinguish primitive copies from copied object references.",
      "Use zero-based indexes and array.length when walking arrays.",
      "Draw small memory sketches before debugging reference bugs."
    ],
    [
      "Turn repeated code into a method with parameters.",
      "Use return when the caller needs a value back.",
      "Choose if for decisions, for for counted loops, and while for condition-driven repetition."
    ],
    [
      "Use inheritance only when the subclass really is a specialized version of the superclass.",
      "Override methods to let the actual object decide behavior at runtime.",
      "Prefer interfaces when you want to describe a capability shared by unrelated classes."
    ],
    [
      "Use ArrayList when the number of items changes.",
      "Use generics to protect collection element types.",
      "Loop through collections with an enhanced for loop when indexes do not matter."
    ]
  ][index] || [
    `Explain ${modules[index].concepts[0]} in one sentence before touching the code.`,
    `Change one line in the ${modules[index].title} starter and predict the output.`,
    "Run, inspect the result, then write down the smallest rule you learned."
  ];
}

function getPracticeMissions(index) {
  return [
    [
      {
        title: "Output microscope",
        goal: "Run this once, then change println to print and observe the exact output shape.",
        code: "public class OutputMicroscope {\n  public static void main(String[] args) {\n    System.out.println(\"Java\");\n    System.out.println(\"Lab\");\n  }\n}"
      },
      {
        title: "Compiler coordinates",
        goal: "Break one semicolon, compile, read the first error, then fix it.",
        code: "public class CompilerCoordinates {\n  public static void main(String[] args) {\n    int score = 21;\n    System.out.println(score * 2);\n  }\n}"
      }
    ],
    [
      {
        title: "Two-object check",
        goal: "Change only one object's field and confirm the other object keeps its own value.",
        code: "public class TwoObjects {\n  static class Player {\n    String name;\n    int score;\n    void show() { System.out.println(name + \": \" + score); }\n  }\n\n  public static void main(String[] args) {\n    Player a = new Player();\n    Player b = new Player();\n    a.name = \"Ada\"; a.score = 10;\n    b.name = \"Grace\"; b.score = 20;\n    a.score = 99;\n    a.show();\n    b.show();\n  }\n}"
      },
      {
        title: "Method extraction",
        goal: "Add a second method to Player that raises the score before show runs.",
        code: "public class MethodExtraction {\n  static class Player {\n    int score;\n    void boost() { score = score + 5; }\n  }\n\n  public static void main(String[] args) {\n    Player p = new Player();\n    p.score = 12;\n    p.boost();\n    System.out.println(p.score);\n  }\n}"
      }
    ],
    [
      {
        title: "Primitive copy",
        goal: "Predict the output before running: does changing a change b?",
        code: "public class PrimitiveCopy {\n  public static void main(String[] args) {\n    int a = 5;\n    int b = a;\n    a = 9;\n    System.out.println(b);\n  }\n}"
      },
      {
        title: "Reference copy",
        goal: "Predict why both variables can see the changed array element.",
        code: "public class ReferenceCopy {\n  public static void main(String[] args) {\n    int[] first = {1, 2, 3};\n    int[] second = first;\n    first[0] = 99;\n    System.out.println(second[0]);\n  }\n}"
      }
    ],
    [
      {
        title: "Return value",
        goal: "Change the method to triple a number instead of doubling it.",
        code: "public class ReturnValue {\n  static int doubleIt(int x) {\n    return x * 2;\n  }\n\n  public static void main(String[] args) {\n    System.out.println(doubleIt(8));\n  }\n}"
      },
      {
        title: "Loop decision",
        goal: "Print only the even numbers from 1 to 10.",
        code: "public class LoopDecision {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 10; i++) {\n      if (i % 2 == 0) {\n        System.out.println(i);\n      }\n    }\n  }\n}"
      }
    ],
    [
      {
        title: "Runtime dispatch",
        goal: "Add a second subclass and store both objects in an Animal array.",
        code: "public class RuntimeDispatch {\n  static class Animal { void speak() { System.out.println(\"sound\"); } }\n  static class Cat extends Animal { void speak() { System.out.println(\"meow\"); } }\n\n  public static void main(String[] args) {\n    Animal a = new Cat();\n    a.speak();\n  }\n}"
      },
      {
        title: "Interface promise",
        goal: "Add another class that implements Named and prints a different name.",
        code: "public class InterfacePromise {\n  interface Named { String name(); }\n  static class Course implements Named { public String name() { return \"Java\"; } }\n\n  public static void main(String[] args) {\n    Named n = new Course();\n    System.out.println(n.name());\n  }\n}"
      }
    ],
    [
      {
        title: "Growing list",
        goal: "Add a third name, then print each name with an enhanced for loop.",
        code: "import java.util.ArrayList;\n\npublic class GrowingList {\n  public static void main(String[] args) {\n    ArrayList<String> names = new ArrayList<String>();\n    names.add(\"Ada\");\n    names.add(\"Grace\");\n    for (String name : names) {\n      System.out.println(name.toUpperCase());\n    }\n  }\n}"
      },
      {
        title: "Type protection",
        goal: "Try to add a number to ArrayList<String> and read the compiler error.",
        code: "import java.util.ArrayList;\n\npublic class TypeProtection {\n  public static void main(String[] args) {\n    ArrayList<String> words = new ArrayList<String>();\n    words.add(\"compile\");\n    System.out.println(words.get(0));\n  }\n}"
      }
    ]
  ][index] || [
    {
      title: `${modules[index].title} starter`,
      goal: "Run the starter, then change one value or method body and predict the new output.",
      code: modules[index].starter
    },
    {
      title: "Tiny remix",
      goal: `Use at least two of these ideas in a new tiny program: ${modules[index].concepts.join(", ")}.`,
      code: modules[index].starter
    }
  ];
}

function renderAll() {
  renderModules();
  renderLesson();
  renderTheory();
  renderQuiz();
  renderDrag();
  renderFill();
  renderRunner();
  updateProgress();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(item => item.classList.remove("active"));
    document.querySelectorAll(".activity").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

$("#checkQuiz").addEventListener("click", () => {
  const quiz = currentQuiz || modules[currentModule].quiz;
  const answers = quiz.answers || [quiz.answer];
  document.querySelectorAll(".option-card").forEach(card => {
    const index = Number(card.dataset.option);
    card.classList.toggle("correct", answers.includes(index));
    card.classList.toggle("incorrect", selectedQuiz === index && !answers.includes(index));
  });
  if (answers.includes(selectedQuiz)) {
    $("#quizFeedback").textContent = `Correct. ${quiz.explain}`;
    award(5);
  } else {
    $("#quizFeedback").textContent = selectedQuiz === null ? "Pick an answer first." : `Not quite. ${quiz.explain}`;
  }
});

$("#newQuiz").addEventListener("click", () => {
  selectedQuiz = null;
  renderQuiz();
});

$("#checkDrag").addEventListener("click", () => {
  const actual = [...document.querySelectorAll(".drag-item")].map(item => item.textContent);
  const expected = modules[currentModule].drag;
  const ok = actual.every((line, index) => line === expected[index]);
  $("#dragFeedback").textContent = ok ? "Clean build. The order is right." : "A line is out of place. Read the braces like nesting boxes.";
  if (ok) award(8);
});

$("#checkFill").addEventListener("click", () => {
  const answers = modules[currentModule].fill.answers;
  const inputs = [...document.querySelectorAll(".blank-input")];
  const ok = inputs.every(input => {
    const expected = answers[Number(input.dataset.blank)];
    const accepted = Array.isArray(expected) ? expected : [expected];
    const actual = input.value.trim().toLowerCase();
    const matches = accepted.map(value => String(value).toLowerCase()).includes(actual);
    input.style.borderColor = matches ? "var(--mint)" : "var(--coral)";
    return matches;
  });
  $("#fillFeedback").textContent = ok ? "Nice patch. That code now reads correctly." : "Some blanks still need a Java-shaped key.";
  if (ok) award(8);
});

$("#checkCrossword").addEventListener("click", () => {
  let correct = 0;
  let total = 0;
  document.querySelectorAll("#crosswordGrid input").forEach(input => {
    total += 1;
    const isCorrect = input.value.toUpperCase() === input.dataset.answer;
    if (isCorrect) correct += 1;
    input.parentElement.style.borderColor = isCorrect ? "var(--mint)" : "var(--coral)";
  });
  $("#crosswordFeedback").textContent = correct === total ? "Crossword cleared." : `${correct}/${total} letters are in place.`;
  if (correct === total) award(12);
});

$("#revealCrossword").addEventListener("click", () => {
  document.querySelectorAll("#crosswordGrid input").forEach(input => {
    input.value = input.dataset.answer;
    input.parentElement.style.borderColor = "var(--mint)";
  });
  $("#crosswordFeedback").textContent = "Answers revealed. Read the crossings, then try clearing the grid from memory.";
});

$("#runJava").addEventListener("click", async () => {
  const button = $("#runJava");
  const output = $("#runnerOutput");
  button.disabled = true;
  output.textContent = compilerProvider === "judge0" ? "Sending to compiler service..." : "Compiling...";
  try {
    const result = compilerProvider === "judge0"
      ? await runJavaWithJudge0($("#javaEditor").value)
      : await runJavaLocally($("#javaEditor").value);
    output.textContent = result.output || result.error || "No output.";
    if (result.ok) award(4);
  } catch (error) {
    output.textContent = `Runner error: ${error.message}`;
  } finally {
    button.disabled = false;
  }
});

async function runJavaLocally(code) {
  const response = await fetch("/api/run-java", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code })
  });
  return response.json();
}

function normalizeJudge0Java(code) {
  const classMatch = code.match(/public\s+class\s+([A-Za-z_$][\w$]*)/);
  if (!classMatch) return code;
  return code.replace(/public\s+class\s+([A-Za-z_$][\w$]*)/, "public class Main");
}

async function runJavaWithJudge0(code) {
  const apiBase = String(appConfig.judge0ApiBase || "").replace(/\/$/, "");
  const languageId = Number(appConfig.javaLanguageId || 62);
  if (!apiBase) {
    return { ok: false, error: "No compiler backend is configured." };
  }

  const submitResponse = await fetch(`${apiBase}/submissions?base64_encoded=false&wait=false`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      language_id: languageId,
      source_code: normalizeJudge0Java(code)
    })
  });

  if (!submitResponse.ok) {
    return { ok: false, error: `Compiler service rejected the submission (${submitResponse.status}).` };
  }

  const submission = await submitResponse.json();
  if (!submission.token) {
    return { ok: false, error: "Compiler service did not return a submission token." };
  }

  for (let attempt = 0; attempt < 12; attempt++) {
    await new Promise(resolve => setTimeout(resolve, 700));
    const resultResponse = await fetch(`${apiBase}/submissions/${submission.token}?base64_encoded=false`);
    if (!resultResponse.ok) {
      return { ok: false, error: `Compiler service result failed (${resultResponse.status}).` };
    }
    const result = await resultResponse.json();
    const statusId = result.status && result.status.id;
    if (statusId === 1 || statusId === 2) continue;
    const output = [result.stdout, result.stderr, result.compile_output, result.message].filter(Boolean).join("");
    return {
      ok: statusId === 3,
      phase: statusId === 3 ? "run" : "compile",
      output: output || (result.status ? result.status.description : "No output.")
    };
  }

  return { ok: false, error: "Compiler service timed out." };
}

function initJavaCoach() {
  const coach = $("#javaCoach");
  const fact = $("#coachFact");
  if (!coach || !fact) return;
  const edge = randomItem(["edge-top", "edge-right", "edge-bottom", "edge-left"]);
  const offset = 18 + Math.floor(Math.random() * 64);
  coach.classList.add(edge);
  coach.style.setProperty("--coach-offset", `${offset}%`);
  const updateFact = () => {
    fact.textContent = randomItem(javaFacts);
  };
  updateFact();
  coach.addEventListener("mouseenter", updateFact);
  coach.addEventListener("focus", updateFact);
  coach.addEventListener("click", updateFact);
}

async function loadDeploymentStatus() {
  const configuredProvider = appConfig.compilerProvider || "auto";
  if (configuredProvider === "judge0") {
    compilerProvider = "judge0";
    runnerEnabled = Boolean(appConfig.judge0ApiBase);
    return;
  }
  if (configuredProvider === "local") {
    compilerProvider = "local";
  }

  try {
    const response = await fetch("/healthz");
    const status = await response.json();
    compilerProvider = "local";
    runnerEnabled = status.runnerEnabled !== false;
  } catch (error) {
    compilerProvider = appConfig.judge0ApiBase ? "judge0" : "local";
    runnerEnabled = compilerProvider === "judge0";
  }
}

loadDeploymentStatus().finally(() => {
  renderCrossword();
  renderAll();
  initJavaCoach();
});
