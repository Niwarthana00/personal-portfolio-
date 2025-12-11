import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/projectDetails.css';
import NavBar from '../components/NavBar';
import TechnologyIcon from '../components/TechnologyIcon';
import ProjectOverview from '../components/ProjectOverview';
import ProjectFeatures from '../components/ProjectFeatures';
import ProjectHeader from '../components/ProjectHeader';
import DownloadButton from '../components/DownloadButton';
import VideoDemo from '../components/VideoDemo';

const projectData = [
  {
    id: 1,
    category: 'Mobile Application',
    title: 'School Bus Notification System',
    mainImage: 'https://i.imgur.com/cpPwOou.png',
    thumbnails: [
      'https://i.imgur.com/Q31DWSn.jpeg',
      'https://i.imgur.com/HleknOK.jpeg',
      'https://i.imgur.com/cLf9zls.jpeg',
      'https://i.imgur.com/oWZmmgL.jpeg',
    ],
    technologies: ['Flutter', 'Firebase'],
    overview:
      'SchoolBus Connect is a comprehensive mobile application designed to streamline communication between school bus drivers and parents. The app provides real-time tracking of student status, instant notifications about delays or changes, QR code generation and scanning features, and a secure platform for managing student transportation.',
    techStack: {
      frontend: 'Developed with Flutter for seamless cross-platform compatibility',
      backend: ['Firebase Realtime Database'],
    },
    features: {
      driverPanel: [
        'QR Code Scanning: Scan student QR codes to update their status',
        'Real-Time Student Status: View and update student attendance status',
        'Student List: View the list of students on the route',
        'Student Details: View detailed information about each student',
        'Communication Hub: Real-time chat with parents',
        'Call Parents: View the parent\'s phone number for direct calls',
        'Profile Management: Update profile details, including profile picture',
      ],
      parentPanel: [
        'Real-Time Tracking: Monitor child status in real-time',
        'QR Code Generation: Generate QR codes for children based on their details',
        'Push Notifications: Receive alerts for changes in status',
        'Chat System: Communicate with drivers in real-time',
        'Payment Management: Make and track transportation payments',
        'Driver Call: View the driver\'s phone number for direct calls',
        'Driver Details: View detailed information about driver',
        'Profile Management: Update parent profile details, including profile picture',
      ],
    },
  },
  {
    id: 2,
    category: 'App Design',
    title: 'Dog Nutrition Food App',
    mainImage: 'https://i.imgur.com/tB0qcze.png',
    thumbnails: [
      'https://i.imgur.com/XeuT6wu.jpeg',
      'https://i.imgur.com/wU3qO5J.jpeg',
      'https://i.imgur.com/RiZZWPP.jpeg',
      'https://i.imgur.com/6eaK9Na.jpeg',
    ],
    technologies: ['Flutter', 'Firebase'],
    overview:
      'This app offers personalized meal plans, nutrition tracking, and food recommendations for your pets. It simplifies pet care and ensures optimal nutrition.',
    techStack: {
      frontend: 'Developed with Flutter for seamless cross-platform compatibility',
      backend: ['Flutter', 'Firebase'],
    },
    features: {
      userPanel: [
        'User Authentication: Secure login and registration',
        'Product Catalog: Browse a wide range of nutritional food products',
        'Shopping Cart: Add items to your cart and proceed with a smooth checkout',
        'Educational Content: Access information about dog nutrition and care',
        'Payment Method: Multiple payment options for convenience',
      ],
    },
  },

  {
    id: 3,
    category: 'Web Design',
    title: 'Restaurant Management System',
    mainImage: 'https://i.imgur.com/vETc3Rj.png',
    thumbnails: [
      'https://i.imgur.com/qQRO8NO.png',
      'https://i.imgur.com/YMdSRcX.png',
      'https://i.imgur.com/V2tlBtb.png',
      'https://i.imgur.com/hiM5xkT.png',
    ],
    technologies: ['Html', 'PHP', 'Javascript', 'Mysql'],
    overview:
      'The Restaurant Management System is a robust platform for managing online food orders, table reservations, and customer interactions. Users can browse through categories, add items to their cart, place orders, or pre-order meals. It also features a contact page with location mapping for easy navigation to the restaurant.',
    techStack: {
      frontend: 'Developed using modern web technologies for a responsive and engaging UI',
      backend: ['MySQL', 'PHP for server-side scripting'],
    },
    features: {
      customerPanel: [
        'Online Food Ordering: Browse menu items by categories, add to cart, and place online orders',
        'Pre-Ordering: Schedule food orders in advance',
        'Table Reservation: Reserve tables for dine-in',
        'Contact Us: View restaurant location on an integrated map',
      ],
      adminPanel: [
        'Orders Management: View, manage, and cancel online and table reservations',
        'Products Management: Add, edit, delete products and categories',
        'Users Management: View customers, and add, edit, or delete staff members',
      ],
      staffPanel: [
        'Orders Section: View and manage orders assigned by the admin',
      ],
    },
  },

  {
    id: 4,
    category: 'Web Design',
    title: 'Computer Shop Website',
    mainImage: 'https://i.imgur.com/W9oeDxX.png',
    thumbnails: [
      'https://i.imgur.com/XGULXTK.png',
      'https://i.imgur.com/yl41iQE.png',
      'https://i.imgur.com/pfy2ihE.png',
      'https://i.imgur.com/nqQTL3J.png',
    ],
    technologies: [".NET", "C#", "SQL Server"],
    overview: "This website is designed to provide a comprehensive online shopping experience for computer enthusiasts. It includes customer-side features like browsing products, placing orders, and downloading quotations, while the admin panel allows for product management, supplier interactions, and order management. The site supports multiple user roles such as Customer, Supplier 1, Supplier 2, and Admin, each with tailored access to functionalities.",
    techStack: {
      frontend: "Developed with .NET interactive and dynamic user interface.",
      backend: [".NET", "C#", "SQL Server"]
    },
    features: {
      customerPanel: [
        "Product Catalog: Browse products based on categories like PC builds and select products for checkout.",
        "Shopping Cart: Add selected products to the cart and proceed with order placement.",
        "Checkout: Secure checkout process to place orders.",
        "Quotation Download: Generate and download quotations as PDFs.",
        "Repair Section: Schedule appointments for repairs.",
        "Upgrade Section: Request upgrades for products or systems."
      ],
      adminPanel: [
        "Product Management: Admin can add, edit, or delete products.",
        "Category Management: Admin can add or delete categories and assign products to them.",
        "Order Management: Admin can view and filter past orders by date, and manage orders placed by suppliers.",
        "Supplier Interaction: Admin can place orders with Supplier 1 and Supplier 2, view their inventory, and compare prices."
      ],
      supplierPanel: [
        "Inventory Management: Supplier 1 and Supplier 2 can manage their inventory.",
        "Order Placement: Suppliers can place orders for products they supply.",
        "Quotation Generation: Suppliers can generate and download quotations for customers."
      ]
    },
  },
  {
    id: 5,
    category: 'UI/UX',
    title: 'School Service App UI Design',
    mainImage: 'https://i.imgur.com/9auYsFG.png',
    thumbnails: [
      'https://i.imgur.com/4oZuhpW.png',
      'https://i.imgur.com/mZbUGu2.png',
      'https://i.imgur.com/HA4lWjD.png',
      'https://i.imgur.com/YrQeR3Q.png',
    ],
    technologies: ["Figma"],
    overview: "The Safe Ride App UI design is simple and easy to use, made especially for parents aged 30–50. It uses orange and white colors to make the app look friendly and clear. Icons are added to help users find what they need quickly, making the app more user-friendly. Images are also used to make the design easier to understand. The layout is clean and organized, so parents can use the app without any trouble.",

    features: {
      Driverrside: [

      ],

      Parentside: [

      ],

    },
  },
  {
    id: 6,
    category: "UI/UX",
    title: "Computer Shop App UI Design",
    mainImage: "https://i.imgur.com/JSh6xDj.png",
    thumbnails: [
      "https://i.imgur.com/CI3IoDS.png",
      "https://i.imgur.com/H6z3BVX.png",
      "https://i.imgur.com/gTueNRq.png",
      "https://i.imgur.com/NXQiKXd.png"
    ],
    technologies: ["Figma"],
    overview: "The Computer Shop App UI design is sleek and modern, using a red and black color scheme to create a bold and professional look. The design focuses on simplicity and functionality, making it easy for users to browse services like building PCs, repairs, and upgrades. Clear icons and organized layouts ensure a smooth user experience, while strategically placed visuals highlight key features for quick navigation.",
    features:
      {}
  },

  {
    "id": 7,
    "category": "Desktop Application",
    "title": "Employee Management System",
    "mainImage": "https://i.imgur.com/v4QMsYk.png",
    "thumbnails": [
      "https://i.imgur.com/4QtrVe5.png",
      "https://i.imgur.com/D7Bi3j8.jpeg",
      "https://i.imgur.com/Eq5fwPs.png",
      "https://i.imgur.com/PmlFTBN.png"
    ],
    "technologies": [
      "Java",
      "MySQL"

    ],
    "overview": "The Employee Management System is a computer program made for Colombo Institute of Studies to handle employee information digitally. Instead of using paper files, HR Managers can easily add new departments, job positions, and employee details through this system. They can also quickly search for any employee information they need. The system also lets administrators create accounts for HR staff members. All this information is safely stored in computer files, making it simple to keep track of employee records and access them whenever needed.",
    "techStack": {
      "frontend": "JavaFX for creating an intuitive and responsive desktop interface",
      "backend": [
        "Java for implementing  OOP concepts",
        "MySQL for database management"
      ]
    },
    "features": {
      "hrManagerPanel": [
        "Department Management: Add and manage different departments within the institute",
        "Designation Management: Create and maintain various job designations",
        "Employee Management: Add new employees with complete details and assign to departments",
        "Advanced Search: Search employees by department, designation, name, or EPF number",
        "Data Persistence: All records are saved and retrieved from files"
      ],
      "adminPanel": [
        "User Management: Create and manage accounts for HR Manager and HR Assistant",
        "Access Control: Implement role-based access control for system security",
        "System Configuration: Manage system-wide settings and permissions"
      ]
    },
    "oopConcepts": {
      "inheritance": "Implements hierarchical class structure for different user types (Admin, HR Manager)",
      "polymorphism": "Uses method overriding for different search implementations",
      "encapsulation": "Data members are private with public getter/setter methods",
      "abstraction": "Abstract classes and interfaces for user roles and data management"
    }
  },

  {
    id: 8,
    category: 'Web Design',
    title: 'Computer Shop Admin Panel',
    mainImage: 'https://i.imgur.com/dSJH7XW.png',
    thumbnails: [
      'https://i.imgur.com/uJiClh1.png',
      'https://i.imgur.com/Lr4hsUO.png',
      'https://i.imgur.com/2IyWqik.png',
      'https://i.imgur.com/MgdmXax.png',
    ],
    technologies: ['.NET', 'C#', 'SQL Server'],
    overview:
      "A desktop application designed for computer shop administrators to manage products, categories, customer details, appointments, and messages seamlessly.",
    techStack: {
      frontend: "Developed with .NET interactive and dynamic user interface.",
      backend: [".NET", "C#", "SQL Server"],
    },
    features: {
      "adminPanel": [
        "Category Management: View, add, edit, and delete product categories",
        "Product Management: Manage product details including name, price, and stock levels",
        "Customer Details: View customer profiles and manage their information",
        "Appointment Tracking: Monitor and manage customer appointments",
        "Message Inbox: View and respond to messages sent by customers"
      ]
    },
  },

  {
    id: 9,
    category: 'Web Application',
    title: 'GOBUS.LK Bus Seat Reservation System',
    mainImage: 'https://i.imgur.com/TpNv8yt.png',
    thumbnails: [
      'https://i.imgur.com/Gwj9LEm.png',
      'https://i.imgur.com/NNinfDr.png',
      'https://i.imgur.com/6tnga4B.png',
      'https://i.imgur.com/TkGErwk.png',
    ],
    technologies: ['React', 'MongoDB', 'Node.js'],
    overview:
      'This web application simplifies the process of reserving and booking bus seats through a seamless user experience. It features a dynamic frontend that provides an intuitive interface for users to search for buses, view seat availability, and make reservations in real-time. The robust backend API supports advanced functionalities.',
    techStack: {
      frontend: 'Built with React, ensuring user-friendly interface.',
      backend: ['Node.js', 'Express', 'MongoDB as the database'],
    },
    features: {
      adminPanel: [
        'Add Booking: Admins can create bookings directly for commuters.',
        'Add Bus: Manage the fleet by adding bus details to the system.',
        'Add Route: Define and manage routes for buses.',
        'Manage Users: Oversee and manage commuter and operator accounts.',
        'Add Schedule: Create and update bus schedules.',
        'View Dashboard: Access a detailed dashboard with analytics and system insights.',
      ],
      operatorPanel: [
        'Add Booking: Operators can create bookings for commuters.',
        'Add Bus: Manage bus details.',
        'Add Route: Define and manage routes.',
        'Add Schedule: Create and update bus schedules.',
        'View Dashboard: Access analytics and operational data.',
      ],
      commuterPanel: [
        'Profile Management: Update personal information and preferences.',
        'Add Booking: Search for available buses, book seats, and manage reservations.',
      ],
    },
  },

  {
    id: 10,
    category: "UI/UX",
    title: "E-Commerce Website UI Design",
    mainImage: "https://i.imgur.com/eGL2BSC.png",
    thumbnails: [
      "https://i.imgur.com/eDKcHXE.png",
      "https://i.imgur.com/ns5rrMz.png",
      "https://i.imgur.com/4S608pN.png",
      "https://i.imgur.com/F8AArbq.png"
    ],
    technologies: ["Figma"],
    overview: "This e-commerce website UI design uses a light pink theme, creating a soft and stylish look. The design is made to attract users, especially for girls' items, and feels organized and easy to use. The catalog is designed to show products clearly and makes shopping enjoyable. The layout encourages users to browse and find items they want to buy quickly, giving a smooth and fun shopping experience.",
    features:
      {}
  },

  {
    id: 11,
    category: 'Web Application',
    title: 'Blockchain Supply Chain Management System',
    mainImage: require('../img/blockchain/main.png'),
    thumbnails: [
      require('../img/blockchain/1.JPG'),
      require('../img/blockchain/2.JPG'),
      require('../img/blockchain/3.JPG'),
      require('../img/blockchain/4.JPG'),
    ],
    technologies: ['Python', 'HTML', 'CSS'],
    overview:
      'Chain Flow is a cutting-edge blockchain-based supply chain management system that revolutionizes product tracking and ownership transfer. Built with advanced cryptographic security and distributed ledger technology, it provides complete transparency and immutability throughout the entire supply chain journey. The system implements role-based access control for Farmers, Distributors, and Retailers, ensuring secure and verifiable transactions at every step.',
    techStack: {
      frontend: 'Developed with HTML and CSS for a responsive user interface',
      backend: ['Python for blockchain implementation', 'JSON-based Distributed Ledger', 'Elliptic Curve Digital Signature Algorithm (ECDSA)', 'Public/Private Key Cryptography'],
    },
    features: {
      keyFeatures: [
        'User Authentication: Secure registration and login system with role-based access (e.g., Farmer, Distributor, Retailer).',
        'Immutable Product Registration: Allows users to register products with details (Batch ID, Name, Quantity, Location) directly onto the blockchain.',
        'End-to-End Tracking: View the complete history of a product, tracking its journey through every transaction block.',
        'Secure Ownership Transfer: Transfer product ownership from one user to another using email verification and cryptographic public keys.',
        'Real-Time Dashboard: Displays total blocks, transactions, and the current status of the blockchain.',
        'Analytics: Visual charts and statistics to monitor supply chain performance.',
      ],
    },
    link: 'https://github.com/Niwarthana00/supplychain-managment-system',
  },
  {
    id: 12,
    category: 'Web Application',
    title: 'Online Seat Reservation System',
    mainImage: require('../img/seatbook/main.png'),
    thumbnails: [
      require('../img/seatbook/11.JPG'),
      require('../img/seatbook/12.JPG'),
      require('../img/seatbook/13.JPG'),
      require('../img/seatbook/14.JPG'),
    ],
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    overview:
      'The Online Seat Reservation System is a comprehensive web application designed to streamline the booking process for events or venues. It features an interactive hall layout visualization that allows users to view real-time seat availability and select seats with ease. The system includes a secure payment gateway, digital receipt generation, and automated email confirmations, ensuring a seamless and secure experience for both customers and administrators.',
    techStack: {
      frontend: 'HTML, CSS for interactive and responsive design',
      backend: ['PHP for server-side logic', 'MySQL for database management'],
    },
    features: {
      keyFeatures: [
        'Interactive Hall Layout Visualization: Visual seat map displaying hall arrangement with real-time availability and color-coded status.',
        'Multiple Seat Selection: Select multiple seats simultaneously with visual confirmation and deselect options.',
        'Customer Information Form: Collects full name, email, phone number, and additional details with validation.',
        'Booking Confirmation Page: Displays selected seat numbers, individual prices, subtotal, taxes, and total amount.',
        'Secure Payment Gateway: Encrypted payment processing with card details input and "Agree & Pay" functionality.',
        'Payment Success Modal: Confirmation message with booking reference, receipt download, and return to home option.',
        'Digital Receipt Generation: Generates receipts with booking ID, customer details, event info, and QR code.',
        'Email Confirmation System: Sends automated emails with booking summary, receipt attachment, and event information.',
      ],
    },
    link: '#',
  },
  {
    id: 13,
    category: 'Mobile Application',
    title: 'Sahana - Disaster Relief Coordination App',
    mainImage: require('../img/sahana/mainimg.png'),
    thumbnails: [
      require('../img/sahana/1.jpeg'),
      require('../img/sahana/2.jpeg'),
      require('../img/sahana/3.jpeg'),
      require('../img/sahana/4.jpeg'),
    ],
    technologies: ['Flutter', 'Firebase', 'Dart', 'Node.js'],
    overview:
      'Sahana is a comprehensive mobile application designed to bridge the gap between disaster victims (Beneficiaries) and those willing to help (Volunteers). It facilitates real-time coordination of relief efforts, ensuring that aid reaches those who need it most, efficiently and transparently.',
    techStack: {
      frontend: 'Flutter (Cross-platform mobile application development framework)',
      backend: ['Firebase (Auth, Firestore, Cloud Functions)', 'Agora RTC (Voice Calling)'],
    },
    features: {
      userRoles: [
        'Beneficiaries: Request aid (food, medical, shelter) and track status',
        'Volunteers: View nearby requests on map and accept tasks'
      ],
      requestManagement: [
        'Create Requests: GPS-based aid requests with urgency levels',
        'Real-time Tracking: Live status updates (Pending, Assigned, Completed)',
        'Map Integration: Visual representation of requests using Google Maps'
      ],
      communication: [
        'In-App Chat: Real-time text messaging between parties',
        'Voice Calling: Integrated high-quality voice calling via Agora'
      ],
      notifications: [
        'Push Notifications: Alerts for request updates and messages'
      ],
      security: [
        'Authentication: Secure login/registration via Firebase',
        'Profile Management: Manage personal details and settings'
      ]
    },
    link: 'https://github.com/Niwarthana00/sahana',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null);
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="project-details-container">Feature under development. Stay tuned for updates!</div>;
  }

  return (
    <div className="project-details-container">
      <NavBar />
      <ProjectHeader project={project} />

      <div className="main-content">
        <div className="preview-section">
          <div className="main-preview">
            <img
              src={project.mainImage}
              alt={project.title}
              className="main-image"
              onClick={() => setModalImage(project.mainImage)}
            />
          </div>
          <div className="thumbnails">
            {project.thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Preview ${index + 1}`}
                className="thumbnail"
                onClick={() => setModalImage(thumb)}
              />
            ))}
          </div>
        </div>

        <div className="info-section">
          <div className="technologies-section">
            <h2 className="h2-title">Technologies</h2>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <TechnologyIcon key={index} name={tech} />
              ))}
            </div>
          </div>

          <div className="main-features">
            {project.category !== 'UI/UX' && (
              <>
                <h2 className="h2-title">Main Features:</h2>
                <ul>
                  {project.id === 11 || project.id === 12
                    ? project.features.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature.split(':')[0]}</li>
                    ))
                    : Object.keys(project.features).map((featureKey, index) => (
                      <li key={index}>{featureKey.replace(/([A-Z])/g, ' $1')}</li>
                    ))}
                </ul>
              </>
            )}
          </div>

          <DownloadButton projectId={project.id} />

          {project.category !== 'UI/UX' && (
            <VideoDemo projectId={project.id} />
          )}
        </div>

      </div>

      <div className="detailed-content">
        <ProjectOverview project={project} />
        <ProjectFeatures project={project} />
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <div className="modal-content">
            <button className="close-btn" onClick={() => setModalImage(null)}>
              &times;
            </button>
            <img src={modalImage} alt="Preview" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;