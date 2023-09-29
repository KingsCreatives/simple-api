const programmingLanguages = [
    {
      name: 'javascript',
      designer: 'Brendan Eich',
      dateOfRelease: '1995',
      currentVersion: 'ECMAScript 2022',
      frameworksLibraries: 30,
      popularFrameworks : [
        {
        name: 'vue.js',
        designer: 'Evan You',
        dateOfRelease: '2014',
        currentVersion: '3.2',
        frameworksLibraries: 1,
        description: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is known for its simplicity and flexibility, making it easy to integrate with other libraries or existing projects.'
      },
      {
        name: 'angular',
        designer: 'Google',
        dateOfRelease: '2010',
        currentVersion: '12',
        frameworksLibraries: 1,
        description: 'Angular is a TypeScript-based open-source web application framework developed by Google. It is widely used for building single-page applications (SPAs).'
      },
      {
        name: 'react',
        designer: 'Facebook',
        dateOfRelease: '2013',
        currentVersion: '17',
        frameworksLibraries: 1,
        description: 'React is a JavaScript library for building user interfaces, often used for building single-page applications where data can change over time.'
      },
      {
        name: 'express.js',
        designer: 'TJ Holowaychuk',
        dateOfRelease: '2010',
        currentVersion: '4.17',
        frameworksLibraries: 1,
        description: 'Express.js is a minimalist web application framework for Node.js. It provides a robust set of features to develop web and mobile applications.'
      },
    ],
      description: 'JavaScript is a versatile scripting language widely used for web development. It allows dynamic content, interactivity, and is an essential part of modern front-end and back-end development.'
    },
    {
      name: 'python',
      designer: 'Guido van Rossum',
      dateOfRelease: '1991',
      currentVersion: '3.10',
      frameworksLibraries: 72,
      popularFrameworks : [
        {
            name: 'django',
            designer: 'Adrian Holovaty, Simon Willison',
            dateOfRelease: '2005',
            currentVersion: '3.2',
            frameworksLibraries: 1,
            description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the "Don\'t Repeat Yourself" (DRY) principle.'
          },
          {
            name: 'flask',
            designer: 'Armin Ronacher',
            dateOfRelease: '2010',
            currentVersion: '2.0',
            frameworksLibraries: 1,
            description: 'Flask is a lightweight Python web framework that follows the WSGI (Web Server Gateway Interface) standard. It is known for its simplicity and flexibility.'
          },
      ],
      description: 'Python is a high-level, interpreted programming language known for its readability and versatility. It supports multiple paradigms and is widely used in web development, data science, and automation.'
    },
    {
      name: 'java',
      designer: 'James Gosling',
      dateOfRelease: '1995',
      currentVersion: '17',
      frameworksLibraries: 54,
      popularFrameworks : [
        {
            name: 'spring boot',
            designer: 'Pivotal Software',
            dateOfRelease: '2013',
            currentVersion: '2.5',
            frameworksLibraries: 1,
            description: 'Spring Boot is an extension of the Spring framework that simplifies the development of production-ready applications with Java. It provides a convention-over-configuration approach.'
          },
      ],
      description: 'Java is a widely-used, class-based, object-oriented programming language designed for platform independence. It is known for its portability, security features, and robustness.'
    },
    {
      name: 'ruby',
      designer: 'Yukihiro Matsumoto',
      dateOfRelease: '1995',
      currentVersion: '3.0',
      frameworksLibraries: 27,
      popularFrameworks:[
        {
            name: 'ruby on rails',
            designer: 'David Heinemeier Hansson',
            dateOfRelease: '2005',
            currentVersion: '6',
            frameworksLibraries: 1,
            description: "Ruby on Rails, often called Rails, is a web application framework written in Ruby. It follows the convention-over-configuration and don't-repeat-yourselfprinciples."
          },
      ],
      description: 'Ruby is a dynamic, object-oriented programming language designed for simplicity and productivity. It is often used in web development, known for its elegant syntax and developer-friendly features.'
    },
    {
      name: 'swift',
      designer: 'Chris Lattner',
      dateOfRelease: '2014',
      currentVersion: '5.5',
      frameworksLibraries: 12,
      description: 'Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It is designed to be fast, modern, and safe.'
    },
    {
      name: 'c++',
      designer: 'Bjarne Stroustrup',
      dateOfRelease: '1983',
      currentVersion: 'ISO/IEC 14882:2020',
      frameworksLibraries: 45,
      description: 'C++ is a general-purpose programming language known for its performance and flexibility. It is an extension of the C language with additional features such as classes and objects.'
    },
    {
      name: 'c#',
      designer: 'Anders Hejlsberg',
      dateOfRelease: '2000',
      currentVersion: '10.0',
      frameworksLibraries: 32,
      popularFrameworks: [
        {
            name: 'asp.net',
            designer: 'Microsoft',
            dateOfRelease: '2002',
            currentVersion: '5',
            frameworksLibraries: 1,
            description: 'ASP.NET is a web framework developed by Microsoft for building dynamic web applications. It allows developers to use .NET languages like C# to build web applications.'
          }
      ],
      description: 'C# (C Sharp) is a modern, object-oriented programming language developed by Microsoft. It is widely used for building Windows applications, web applications, and games using the .NET framework.'
    },
    {
      name: 'go',
      designer: 'Robert Griesemer, Rob Pike, Ken Thompson',
      dateOfRelease: '2009',
      currentVersion: '1.17',
      frameworksLibraries: 19,
      description: 'Go, also known as Golang, is a statically typed, compiled language designed for simplicity and efficiency. It is often used for systems programming, cloud computing, and concurrent programming.'
    },
    {
      name: 'rust',
      designer: 'Graydon Hoare',
      dateOfRelease: '2010',
      currentVersion: '1.55',
      frameworksLibraries: 15,
      description: 'Rust is a systems programming language that focuses on safety, speed, and concurrency. It is designed to prevent crashes and eliminate data races, making it suitable for high-performance applications.'
    },
    {
      name: 'typescript',
      designer: 'Anders Hejlsberg',
      dateOfRelease: '2012',
      currentVersion: '4.4',
      frameworksLibraries: 20,
      description: 'TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity. It is widely used for building large-scale applications.'
    },
    {
      name: 'kotlin',
      designer: 'JetBrains',
      dateOfRelease: '2011',
      currentVersion: '1.5',
      frameworksLibraries: 10,
      description: 'Kotlin is a modern, concise programming language that runs on the Java Virtual Machine (JVM). It is officially supported for Android development and interoperates seamlessly with Java.'
    },
    {
      name: 'php',
      designer: 'Rasmus Lerdorf',
      dateOfRelease: '1995',
      currentVersion: '8.0',
      frameworksLibraries: 45,
      popularFrameworks: [
        {
            name: 'laravel',
            designer: 'Taylor Otwell',
            dateOfRelease: '2011',
            currentVersion: '8.x',
            frameworksLibraries: 1,
            description: 'Laravel is a PHP web framework known for its elegant syntax and tools for tasks like routing, migrations, and authentication. It follows the Model-View-Controller (MVC) pattern.'
          },
      ],
      description: 'PHP is a server-side scripting language designed for web development. It is widely used for building dynamic web pages and is embedded in HTML code.'
    },
    {
      name: 'r',
      designer: 'Ross Ihaka, Robert Gentleman',
      dateOfRelease: '1993',
      currentVersion: '4.1',
      frameworksLibraries: 30,
      description: 'R is a programming language and free software environment for statistical computing and graphics. It is widely used among statisticians and data miners for developing statistical software and data analysis.'
    },
    {
      name: 'dart',
      designer: 'Google',
      dateOfRelease: '2011',
      currentVersion: '2.13',
      frameworksLibraries: 10,
      description: 'Dart is a programming language developed by Google. It is often used for building mobile, desktop, server, and web applications.'
    },
    {
      name: 'scala',
      designer: 'Martin Odersky',
      dateOfRelease: '2003',
      currentVersion: '3.1',
      frameworksLibraries: 15,
      description: 'Scala is a general-purpose programming language that blends object-oriented and functional programming. It runs on the Java Virtual Machine (JVM) and is often used for building scalable and concurrent systems.'
    },
    {
      name: 'perl',
      designer: 'Larry Wall',
      dateOfRelease: '1987',
      currentVersion: '5.34',
      frameworksLibraries: 20,
      description: 'Perl is a versatile and powerful scripting language known for its text processing capabilities. It is used for system administration, web development, and network programming.'
    },
    {
      name: 'haskell',
      designer: 'Simon Peyton Jones',
      dateOfRelease: '1990',
      currentVersion: '8.10',
      frameworksLibraries: 10,
      description: 'Haskell is a functional programming language with a strong, static type system. It is known for its expressive syntax and is used in academia and industry for research and application development.'
    },
    {
      name: 'objective-c',
      designer: 'Brad Cox',
      dateOfRelease: '1983',
      currentVersion: '2.0',
      frameworksLibraries: 10,
      description: 'Objective-C is an extension of the C programming language with Smalltalk-style object-oriented programming. It was the main programming language used by Apple for macOS and iOS application development.'
    },
    {
      name: 'shell',
      designer: 'Various',
      dateOfRelease: '1970',
      currentVersion: 'Bash 5.1',
      frameworksLibraries: 20,
      description: 'Shell scripting involves writing a series of command-line instructions to be executed in sequence. Commonly used for automating system tasks and managing files.'
    },
    {
      name: 'sql',
      designer: 'Donald D. Chamberlin, Raymond F. Boyce',
      dateOfRelease: '1974',
      currentVersion: 'SQL:2016',
      frameworksLibraries: 15,
      description: 'SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases. It is widely used for data retrieval and manipulation.'
    },
    {
      name: 'groovy',
      designer: 'James Strachan',
      dateOfRelease: '2003',
      currentVersion: '3.0',
      frameworksLibraries: 10,
      description: 'Groovy is a dynamic language for the Java Virtual Machine (JVM). It combines features of scripting languages with Java interoperability, making it suitable for a variety of tasks.'
    },
    {
      name: 'lua',
      designer: 'Roberto Ierusalimschy, Waldemar Celes, Luiz Henrique de Figueiredo',
      dateOfRelease: '1993',
      currentVersion: '5.4',
      frameworksLibraries: 15,
      description: 'Lua is a lightweight, embeddable scripting language designed for extending applications. It is often used in game development and embedded systems.'
    },
    {
      name: 'tensorflow',
      designer: 'Google Brain Team',
      dateOfRelease: '2015',
      currentVersion: '2.7',
      frameworksLibraries: 1,
      description: 'TensorFlow is an open-source machine learning framework developed by the Google Brain Team. It is widely used for building and training machine learning models.'
    },
    {
      name: 'pytorch',
      designer: 'Facebook AI Research (FAIR)',
      dateOfRelease: '2016',
      currentVersion: '1.9',
      frameworksLibraries: 1,
      description: 'PyTorch is an open-source machine learning library developed by Facebook. It is known for its dynamic computation graph and ease of use, especially in research and prototyping.'
    },
    {
        name: 'io',
        designer: 'Steve Dekorte',
        dateOfRelease: '2002',
        currentVersion: '2015.11.11',
        frameworksLibraries: 2,
        description: 'Io is a small, prototype-based programming language. It is known for its minimal syntax and powerful message-passing model. Io is often used for exploring new ideas in language design.'
      },
      {
        name: 'red',
        designer: 'Nenad Rakocevic',
        dateOfRelease: '2011',
        currentVersion: '0.6.4',
        frameworksLibraries: 1,
        description: 'Red is a programming language inspired by REBOL. It is designed for conciseness and expressiveness, with a focus on domain-specific language creation. Red can be used for system programming and high-level scripting.'
      },
      {
        name: 'erlang',
        designer: 'Joe Armstrong, Robert Virding, Mike Williams',
        dateOfRelease: '1986',
        currentVersion: '24.1',
        frameworksLibraries: 10,
        description: 'Erlang is a functional, concurrent programming language designed for building fault-tolerant and scalable distributed systems. It is often used in telecommunications and distributed computing.'
      },
      {
        name: 'forth',
        designer: 'Charles H. Moore',
        dateOfRelease: '1970',
        currentVersion: 'ANS Forth',
        frameworksLibraries: 5,
        description: 'Forth is an imperative stack-based programming language. It is known for its simplicity and efficiency, often used in embedded systems and real-time applications.'
      },
      {
        name: 'factor',
        designer: 'Slava Pestov',
        dateOfRelease: '2003',
        currentVersion: '0.98',
        frameworksLibraries: 3,
        description: 'Factor is a stack-based, concatenative programming language. It features a powerful and extensible compiler, making it suitable for a wide range of applications, including metaprogramming.'
      },
      {
        name: 'j',
        designer: 'Kenneth E. Iverson, Roger Hui',
        dateOfRelease: '1990',
        currentVersion: '9.02',
        frameworksLibraries: 4,
        description: 'J is an array programming language that extends APL with additional features. It is known for its concise and expressive syntax, particularly well-suited for mathematical and statistical computing.'
      },
      {
        name: 'prolog',
        designer: 'Alain Colmerauer, Robert Kowalski',
        dateOfRelease: '1972',
        currentVersion: 'ISO/IEC 13211-1',
        frameworksLibraries: 8,
        description: 'Prolog is a logic programming language designed for symbolic reasoning and manipulation. It is widely used in artificial intelligence and natural language processing.'
      },
      {
        name: 'd',
        designer: 'Walter Bright',
        dateOfRelease: '2007',
        currentVersion: '2.097.0',
        frameworksLibraries: 5,
        description: 'D is a systems programming language with a focus on efficiency, performance, and safety. It combines features from various programming languages and is designed for both systems-level and application-level programming.'
      },
      {
        name: 'nim',
        designer: 'Andreas Rumpf',
        dateOfRelease: '2008',
        currentVersion: '1.4',
        frameworksLibraries: 6,
        description: 'Nim is a statically typed, imperative programming language with a focus on performance and expressiveness. It offers a syntax that is easy to read and write, making it suitable for various domains.'
      },
      {
        name: 'crystal',
        designer: 'Ary Borenszweig, Juan Wajnerman, Brian Cardiff',
        dateOfRelease: '2014',
        currentVersion: '1.1.1',
        frameworksLibraries: 4,
        description: 'Crystal is a compiled programming language with a syntax similar to Ruby. It aims to combine the expressiveness of high-level scripting languages with the performance of compiled languages.'
      }
  ];


  module.exports = programmingLanguages
  
 
  