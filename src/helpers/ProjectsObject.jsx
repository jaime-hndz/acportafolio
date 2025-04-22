const projectsObjectRaw = {
  bifrost: {
    titleEN: "Neo-bifrost",
    titleES: "Neo-bifrost",
    en: [
      `The system uses an API to manage authentication through
          JWT (JSON Web Tokens) signed with asynchronous cryptographic keys.
          Users log in via a frontend, where credentials are validated by the API
          using a repository that manages user and station data. If the credentials
          are correct, a JWT signed with a private key is generated, containing
          user information, permissions, and an expiration time.`,
      `Applications consuming the API, such as Sinewave-drawer, verify
          the JWTs using the public key, ensuring the tokens are genuine
          and have not expired. Tokens expire after a set time, and to obtain a
          new one, the user must use a refresh token or authenticate again. The system
          follows the repository pattern to separate data and business logic,
          facilitating maintenance and scalability.`,
    ],
    es: [
      `El sistema utiliza una API para gestionar la autenticación mediante
          JWT (JSON Web Tokens) firmados con llaves criptográficas asincrónicas.
          Los usuarios inician sesión a través de un frontend, donde las
          credenciales son validadas por la API utilizando un repositorio que
          gestiona los datos de usuarios y estaciones. Si las credenciales son
          correctas, se genera un JWT firmado con una llave privada que contiene
          información del usuario, permisos y un tiempo de expiración.`,
      `Las aplicaciones que consumen la API, como Sinewave-drawer, verifican
          los JWT usando la llave pública, asegurando que los tokens sean
          genuinos y no hayan expirado. Los tokens vencen después de un tiempo
          establecido y, para obtener uno nuevo, el usuario debe usar un token
          de actualización o autenticarse nuevamente. El sistema sigue el patrón
          repositorio para separar la lógica de datos y negocio, lo que facilita
          su mantenimiento y escalabilidad.`,
    ],
    numberColumn: 2,
    images: ["bifrost2", "bifrost1", "bifrost3", "bifrost4", "bifrost5"],
    tags: ["csharp", "react", "jwt"],
    labelTags: ["csharp", "react", "jwt", "antd", "sql", "typescript"],
    primaryColor: "gray",
    textStyle: `text-4xl md:text-6xl  text-slate-700 tracking-widest text-2xl pepe `,
  },
  sinewave: {
    titleEN: "Sinewave Drawer",
    titleES: "Sinewave Drawer",
    en: [
      `Sinewave-drawer is a system designed to manage inventory closures
          at the gas filling stations of the Marti group, owners of Tropigas.
          The system tracks details of gas gallons dispensed, products sold, and
          cash deposits or gas receipts. The process is handled through a
          step-by-step flow that ensures accuracy and traceability of operations
          at each station.`,
      `On the frontend, sales and inventory-related data are stored and
          later synchronized with the API for storage and processing. This API
          communicates with the neo-bifrost API to validate JWT (JSON Web Tokens)
          and ensure secure and legitimate interactions. The system also manages
          initial and final gas inventories and configurations stored for each station.`,
      `Sinewave-drawer includes key features such as a history system
          to record operations and a reporting tool to generate detailed
          reports on transactions. This enables administrators and operators
          to maintain precise and reliable control of operations at the gas
          filling stations. It is possibly the longest project I have developed
          from scratch to date.`,
    ],
    es: [
      `Sinewave-drawer es un sistema diseñado para gestionar los cierres de
          inventario en las estaciones envasadoras de gas del grupo Marti,
          propietarios de Tropigas. El sistema realiza un seguimiento detallado
          de los galones de gas dispensados, los productos vendidos, y los
          depósitos de efectivo o recepciones de gas. El proceso se maneja a
          través de un flujo paso a paso que asegura la precisión y trazabilidad
          de las operaciones en cada estación.`,
      `En el frontend, se almacenan los datos relacionados con las ventas y
          el inventario, que luego se sincronizan con la API para ser
          almacenados y procesados. Esta API, a su vez, se comunica con la API
          de neo-bifrost para validar los JWT (JSON Web Tokens) y asegurar que
          las interacciones sean seguras y legítimas. El sistema también
          gestiona los inventarios iniciales y finales de gas, así como las
          configuraciones almacenadas para cada estación.`,
      `Sinewave-drawer incluye funcionalidades clave como un sistema de
          historial para registrar las operaciones y una herramienta de
          reportería para generar informes detallados sobre las transacciones
          realizadas. Esto permite a los administradores y operadores llevar un
          control preciso y confiable de las operaciones en las estaciones
          envasadoras. Es posiblemente el proyecto más largo que he desarrollado
          desde 0 hasta el día de hoy.`,
    ],
    numberColumn: 2,
    images: ["sinewave1", "sinewave2", "sinewave3"],
    tags: ["next", "csharp", "jwt"],
    labelTags: [
      "next",
      "csharp",
      "jwt",
      "antd",
      "sql",
      "typescript",
      "tailwind",
    ],
    primaryColor: "stone",
    textStyle: `text-4xl md:text-6xl text-black text-2xl pepe font-bold `,
  },
  barna: {
    titleEN: "Intellectual Production",
    titleES: "Producción Intelectual",
    en: [
      `
          The Intellectual Production Application was developed on behalf of the
          Intellectual Production Department of Barna Management School to organize
          and efficiently manage publications, articles, reports, and other content
          generated by the institution. Since many of the existing applications
          at the school were developed within the Microsoft suite environment, I
          decided to build this application using Power Apps, which facilitated
          integration and leveraged the existing tools.
        `,
      `
          The application allows for easy entry of publications, which can then
          be filtered and sorted according to various criteria, improving
          accessibility and information management. Additionally, it includes
          features to generate charts providing a visual overview of publications
          and their distribution. It also integrates with Power BI, enabling
          users to generate dynamic reports and deeper analyses of the publications,
          facilitating decision-making and monitoring of the institution's
          intellectual production.
        `,
      `
          Although I learned a lot, I must admit that Power Apps is a very
          uncomfortable technology to work with.
        `,
    ],
    es: [
      `
          La Aplicación de Producción Intelectual fue desarrollada por encargo
          del Departamento de Producción Intelectual de Barna Management School
          con el objetivo de organizar y gestionar de manera eficiente las
          publicaciones, artículos, informes y otros contenidos generados por la
          institución. Dado que muchas de las aplicaciones existentes en la
          escuela estaban desarrolladas en el entorno de la suite de Microsoft,
          opté por construir esta aplicación utilizando Power Apps, lo que
          facilitó la integración y aprovechamiento de las herramientas ya
          existentes.
        `,
      `
          La aplicación permite ingresar las publicaciones de manera sencilla y
          luego filtrarlas y ordenarlas según diversos criterios, mejorando la
          accesibilidad y el manejo de la información. Además, incluye
          funcionalidades para generar gráficos que proporcionan una visión
          visual de las publicaciones y su distribución. También cuenta con
          integración con Power BI, lo que permite a los usuarios generar
          reportes dinámicos y análisis más profundos de las publicaciones,
          facilitando la toma de decisiones y el seguimiento de la producción
          intelectual de la institución.
        `,
      `
          A pesar de que aprendí mucho, he de reconocer que Power Apps es una
          tecnología muy incómoda de trabajar.
        `,
    ],
    numberColumn: 2,
    images: ["barna1", "barna2", "barna3", "barna4"],
    tags: ["powerapps"],
    labelTags: ["powerapps"],
    primaryColor: "barnablue",
    textStyle: `text-3xl md:text-5xl text-white tracking-wide text-2xl font-bold `,
  },
  portfolio: {
    titleEN: "Portfolio",
    titleES: "Portfolio",
    en: [
      `
          When I started creating my portfolio, I didn't want to use a template because I felt it would lack personality. So, I took on the task of looking at hundreds of portfolios until I found one that matched how I wanted mine to look. I should note that I don't have any UI/UX knowledge. This portfolio is heavily based on Hamish Williams' portfolio. Although Hamish's portfolio repository is public, I redid almost the entire project from scratch (mainly because it uses some technologies that I don't know how to use). I also drew some inspiration from Mees Verberne's portfolio, though to a lesser extent.
        `,
      `
          One thing I liked about the aforementioned portfolio is that it includes elements of Japanese culture, which I've been a fan of for many years. I wanted to keep these elements because they represent some of my interests in popular culture and in general. Additionally, I saw the use of bento box design (also related to Japanese culture) on various websites and was fascinated by its application. Therefore, I decided to include it in my portfolio and hope to use it in future projects.
        `,
    ],
    es: [
      `
          Cuando comencé a hacer mi portafolio, no quería usar una plantilla, ya que considero que le resta personalidad. Por eso, me dediqué a ver cientos de portafolios hasta encontrar uno que encajara con la visión que tenía para el mío. Aclaro que no tengo conocimientos de UI/UX. Este está altamente basado en el portafolio de Hamish Williams. Aunque el repositorio del portafolio de Hamish es público, rehice casi todo el proyecto desde cero (principalmente porque utiliza algunas tecnologías que no sé usar). También me inspiré un poco en el de Mees Verberne, aunque en menor medida.
          
        `,
      `
Algo que me gustó del portafolio mencionado es que tiene elementos de la cultura japonesa, de la cual he sido fan por muchos años. Quería mantener estos elementos, ya que representan algunos de mis gustos en la cultura popular y en general. Por otro lado, el uso del diseño de bento box (también relacionado con la cultura japonesa) lo vi en varios sitios de internet y quedé fascinado con su aplicación. Por eso, decidí incluirlo en mi portafolio y espero utilizarlo en futuros proyectos.
        `,
    ],
    numberColumn: 2,
    images: ["portfolio1", "portfolio2", "portfolio3", "portfolio4"],
    tags: ["vite"],
    labelTags: ["vite", "tailwind", "antd"],
    primaryColor: "teal",
    textStyle: `text-5xl text-white tracking-wide text-2xl pepe `,
  },
  invoice: {
    titleEN: "Handdo .Invoice",
    titleES: "Handdo .Invoice",
    en: [
      `
          Handdo.Invoice is a module within the Handdo system by K3D Technology,
          which allows for automatic invoice generation through an API. The
          module's main functionality involves receiving a request to create an
          invoice, processing it, and returning the generated PDF file. The
          process works as follows: the API receives the request, then uses
          Selenium internally to interact with a web interface to visually display
          the invoice data. Once the invoice is generated, it is "printed" and
          saved as a PDF file, which is returned directly to the requesting system.
        `,
      `
          The decision to use Selenium instead of other document generation methods
          was driven by the need to integrate the module with another system
          requiring this specificity. This approach met the integration requirements
          that would otherwise have complicated the task of automatically generating
          invoices without the visual interaction provided by Selenium.
        `,
    ],
    es: [
      `
          Handdo.Invoice es un módulo dentro del sistema Handdo de K3D
          Technology, que permite generar facturas automáticamente a través de
          una API. La funcionalidad principal del módulo consiste en recibir una
          solicitud para crear una factura, procesarla y devolver el archivo PDF
          generado. El proceso se realiza de la siguiente manera: la API recibe
          la petición, luego utiliza Selenium internamente para interactuar con
          una interfaz web y mostrar los datos de la factura de forma visual.
          Una vez que la factura es generada, se "imprime" y guarda como un
          archivo PDF, el cual es retornado directamente al sistema que hizo la
          solicitud.
        `,
      `
          La decisión de utilizar Selenium en lugar de otros métodos de
          generación de documentos se debió a la necesidad de integrar el módulo
          con otro sistema que requería esta especificidad. Este enfoque
          permitió cumplir con los requerimientos de integración, que de otro
          modo habrían complicado la tarea de generar la factura de forma
          automática sin la interacción visual proporcionada por Selenium.
        `,
    ],
    numberColumn: 2,
    images: ["invoice1"],
    tags: ["csharp"],
    labelTags: ["csharp", "selenium"],
    primaryColor: "blue",
    textStyle: `text-4xl text-black text-2xl font-consolas `,
  },
  transporte: {
    titleEN: "Final Career Project",
    titleES: "Proyecto final de carrera",
    en: [
      `
          The ITLA Transportation App was a project developed as part of my
          final career work at the Instituto Tecnológico de las Américas (ITLA).
          This system recreated and modernized the student transportation process
          that existed at the time. Originally, students had to request a ticket,
          physically purchase it, receive a printed version, and then present it
          to board the buses. My application digitized and simplified this entire
          process.
        `,
      `
          The system allowed students to purchase tickets directly from a web
          page and use them via a QR code integrated into their student ID. When
          boarding the bus, the QR code was scanned to verify the ticket's validity,
          eliminating the need for physical documents. Additionally, the app
          provided key information about available routes, stations, and schedules
          to improve the user experience.
        `,
    ],
    es: [
      `
          La App de Transporte ITLA fue un proyecto desarrollado como parte del
          trabajo final de mi carrera en el Instituto Tecnológico de las
          Américas (ITLA). Este sistema recreó y modernizó el proceso de
          transporte estudiantil que existía en ese momento. Originalmente, los
          estudiantes debían solicitar un ticket, ir físicamente a comprarlo,
          recibir una impresión del mismo, y luego presentarlo para abordar los
          autobuses. Mi aplicación digitalizó y simplificó todo este proceso.
        `,
      `
          El sistema permitía a los estudiantes comprar los tickets directamente
          desde una página web y utilizarlos mediante un código QR integrado en
          su carnet estudiantil. Al momento de abordar el autobús, el código QR
          se escaneaba para verificar la validez del ticket, eliminando la
          necesidad de manejar documentos físicos. Además, la app proporcionaba
          información clave sobre las rutas disponibles, estaciones, y horarios
          para mejorar la experiencia del usuario.
        `,
    ],
    numberColumn: 2,
    images: [
      "transporte1",
      "transporte2",
      "transporte3",
      "transporte4",
      "transporte5",
      "transporte6",
    ],
    tags: ["react", "csharp"],
    labelTags: ["react", "csharp", "sql", "leaflet"],
    primaryColor: "barnablue",
    textStyle: `text-4xl text-sky-100 text-2xl font-bold italic `,
  },
  hospitalCash: {
    titleEN: "Hospital Cash Register",
    titleES: "Gestión Financiera",
    en: [
      `
          In August 2024, I developed a cash register application for a hospital using the MVC (Model-View-Controller) pattern. This system manages cash inflows and outflows, ensuring an accurate record of all transactions.
        `,
      `
The application is designed to operate independently, allowing it to continue functioning even if the central system (core) is unavailable. Once the connection to the core is restored, the application automatically synchronizes the recorded data, ensuring that the information is always up-to-date and centralized. This approach guarantees operational continuity in critical environments like hospitals, improving the efficiency and reliability of cash management processes.
      `,
      `
I must say that thanks to this project, my team earned a pizza in the Software Development III course.
      `,
    ],
    es: [
      `En agosto de 2024, desarrollé una aplicación de registro de efectivo para la caja de un hospital, utilizando el patrón MVC (Modelo-Vista-Controlador). Este sistema permite gestionar los ingresos y egresos de efectivo en la caja, asegurando un registro preciso de las transacciones realizadas.
      `,
      `La aplicación está diseñada para funcionar de manera independiente, lo que permite continuar operando incluso si el sistema central (core) no está disponible. Una vez que la conexión con el core se restablece, la aplicación sincroniza automáticamente los datos registrados, garantizando que la información esté siempre actualizada y centralizada. Este enfoque asegura la continuidad operativa en entornos críticos como el hospital, mejorando la eficiencia y confiabilidad del proceso de gestión de caja.
      `,
      `He de decir que gracias a este proyecto mi equipo se ganó una pizza en la asignatura de desarrollo de software III
      `,
    ],
    numberColumn: 2,
    images: ['hospital1','hospital2', 'hospital3'],
    tags: ["csharp"],
    labelTags: ["mvc", "csharp", "sqlite"],
    primaryColor: "mint",
    textStyle: `text-5xl text-teal-950 text-2xl pepe italic`,
  },
  uno: {
    titleEN: "UNO console",
    titleES: "UNO consola",
    en: [
      `
          In process...
        `,
    ],
    es: [
      `
          En desarrollo...
        `,
    ],
    numberColumn: 1,
    images: [],
    tags: ["csharp"],
    labelTags: ["jwt", "csharp", "sql", "websockets"],
    primaryColor: "orange",
    textStyle: `text-6xl text-black text-2xl pepe font-bold text-orange-100 `,
    mini: true,
  },
  membretes: {
    titleEN: "Membretes API",
    titleES: "Membretes API",
    en: [
      `
          It is an application that I made in my spare time. It consists in that you write a word and it makes an ASCII art so you can copy it.
          I made this because in some exercises with console applications I like to put ascii art signs.
          This is the V1. In the future, I will turn it into an API.
        `,
    ],
    es: [
      `
          Es una aplicación que hice en mi tiempo libre. Consiste en que escribes una palabra y genera un arte ASCII para que puedas copiarlo.
          Hice esto porque en algunos ejercicios con aplicaciones de consola me gusta incluir signos de arte ASCII.
          Esta es la versión 1 (V1).
          En el futuro, lo convertiré en una API.
        `,
    ],
    numberColumn: 2,
    images: [],
    tags: ["csharp"],
    labelTags: ["csharp"],
    primaryColor: "teal",
    textStyle: `text-4xl text-white text-2xl font-consolas `,
    mini: true,
  },
  chat: {
    titleEN: "Real time chat",
    titleES: "Chat en tiempo real",
    en: [
      `
          In process...
        `,
    ],
    es: [
      `
          En desarrollo...
        `,
    ],
    numberColumn: 2,
    images: [],
    tags: ["csharp"],
    labelTags: ["csharp", "websockets"],
    primaryColor: "barnablue",
    textStyle: `text-6xl text-black text-2xl bodoni font-bold `,
    mini: true,
  },
};

export const projectsObject = Object.entries(projectsObjectRaw).reduce(
  (acc, [key, value]) => {
    acc[key] = {
      ...value,
    };

    return acc;
  },
  {}
);
