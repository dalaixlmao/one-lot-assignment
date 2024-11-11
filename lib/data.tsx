// Importing required components/icons for the page
import Dollar from "@/components/icons/dollar";
import Speaker from "@/components/icons/speaker";

// Features data to display different financing and management options for car dealers
const features = [
  {
    title: "Car Financing",
    subTitle: "Dealer Inventory Loans", // Subtitle for the financing option
    headerDescription:
      "OneLot's working capital loans allow car dealers to buy more cars and capitalize on opportunities you would otherwise have missed. We transfer the money to your account within 6 hours.", // Description explaining the benefits of car financing
    advantages: [
      {
        title: "", // Placeholder title
        description:
          "Interest as low as 1.8% per month with daily calculation of interest", // Advantage description for low-interest rates
      },
      {
        title: "", // Placeholder title
        description: "Financing up to 70% of the vehicle purchase", // Advantage description for financing percentage
      },
      {
        title: "", // Placeholder title
        description:
          "Financing period up to 90 days with a flexible repayment schedule at any point", // Advantage description for flexible repayment terms
      },
    ],
    footerDescription:
      "Use OneLot's financing solution today, grow the number of cars in your lot, and increase your profits.", // Footer call-to-action
    buttonText: "View Loans", // Button text for taking action
    imagePath: "/car_financing.svg", // Path for the financing-related image
  },
  {
    title: "Dealership Management System",
    subTitle: "", // Empty subtitle for this feature
    headerDescription:
      "OneLot's digital platform is built with a single goal: to help used car dealers operate their business more efficiently.", // Description of the digital platform
    advantages: [
      {
        title: "Inventory Management", // Title for this advantage
        description:
          "Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.", // Description for inventory management
      },

      {
        title: "Marketing Tools", // Title for this advantage
        description:
          "Promote your cars across all the different platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click of a button", // Description for marketing tools
      },
      {
        title: "Marketing Insights (Coming Soon)", // Title for this upcoming feature
        description:
          "Get insights on prices and volumes for all cars in the market. We provide you with all the data by combining information from various sources with a single click of a button", // Description for future marketing insights
      },
    ],
    footerDescription:
      "Use OneLot's financing solution today, grow the number of cars in your lot, and increase your profits.", // Footer call-to-action
    buttonText: "Explore Now", // Button text for exploring the management system
    imagePath: "/dealership_management_system.svg", // Path for the management system image
  },
];

// Values section displaying icons with associated values to instill confidence in the users
const values = [
  {
    icon: "https://www.onelot.ph/trust.svg", // Path for trust icon
    value: "Trust", // Value title
    title: "Regulated by Securities and Exchange Commission (SEC) Philippines", // Description for trust
  },
  {
    icon: "https://www.onelot.ph/high_amount.svg", // Path for high amount icon
    value: "High Amount", // Value title
    title: "Get the highest loan amounts compared to other banks and lenders", // Description for high loan amounts
  },
  {
    icon: "https://www.onelot.ph/fast.svg", // Path for fast icon
    value: "Fast", // Value title
    title: "Get the money within a few hours on the same day", // Description for fast loan processing
  },
  {
    icon: "https://www.onelot.ph/flexible.svg", // Path for flexible icon
    value: "Flexible", // Value title
    title: "Loans are tailored to your needs", // Description for flexible loan terms
  },
  {
    icon: "https://www.onelot.ph/easy.svg", // Path for easy icon
    value: "Easy", // Value title
    title: "Run through an easy process and get your first loans within days", // Description for ease of use
  },
];

// Testimonials section to show customer feedback
const testimonials = [
  {
    icon: "/testimonial_4.svg", // Path for the testimonial icon
    description:
      "“The service of OneLot is top-notch. They act fast and can provide dealers with the funds they need, when they need it.”", // Testimonial description
    author: "Mark Vergel de Dios", // Testimonial author name
    designation: "Owner, MVD Auto Works", // Author's designation
  },
];

// Posts section, displaying recent posts or articles
const posts = [
  "/post.png", // Path for the post image
  "/post.png",
  "/post.png",
  "/post.png",
  "/post.png",
  "/post.png",
  "/post.png",
];

// Frequently Asked Questions (FAQs) section
const faqs = [
  {
    question: "How do I apply for a loan?", // FAQ question
    answer:
      "OneLot onboarding is easy and straightforward onboarding process. We only require a few documents and after a few days you can get your first loan.", // FAQ answer
    link: {
      text: "See full requirements", // Link text
      url: "#", // Placeholder URL
    },
  },
  {
    question: "What are the interest rates offered?", // FAQ question
    answer:
      "Our competitive interest rates vary based on your credit profile and loan terms.", // FAQ answer
  },
  {
    question: "What kind of vehicles can I upload?", // FAQ question
    answer:
      "We accept a wide range of vehicles subject to our eligibility criteria.", // FAQ answer
  },
  {
    question: "How can I keep track of potential buyers?", // FAQ question
    answer:
      "We provide a comprehensive dashboard to monitor all potential buyer interactions.", // FAQ answer
  },
];

// Page description with title and introduction text
const pageDescription = {
  title: "Everything you need to grow your business", // Page title
  description: `OneLot is your trusted lending and financing partner, exclusively
          tailored for used car dealerships. We also offer digital tools for
          streamlined operations and growth of your dealership.`, // Page description
};

// Offer section with tailored loan solutions and dealership management system options
const offer = [
  {
    title: "Dealer Loans", // Offer title
    motive: "Accelerate your growth with tailored loan solutions.", // Motive for dealer loans
    description:
      "Get comprehensive car financing solutions, unlock the potential of your dealership, and take it to new heights.", // Offer description
    icon: <Dollar color="#51CAD7" />, // Dollar icon for the loan offer
    color: "blue", // Color theme for the loan offer
  },
  {
    title: "Dealership Management System", // Offer title
    description:
      "OneLot offers a suite of powerful digital tools designed to optimize your dealership's operations.", // Offer description
    motive:
      "Enhance Efficiency and Sales with Free Digital Tools for Car Dealerships.", // Motive for the management system
    icon: <Speaker color="#57009C" />, // Speaker icon for the management system offer
    color: "purple", // Color theme for the management system offer
  },
];

// Exporting all data objects to be used in other parts of the application
export { 
  features, 
  values, 
  testimonials, 
  posts, 
  faqs, 
  offer, 
  pageDescription 
};
