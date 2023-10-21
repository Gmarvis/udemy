import { SimpleCourseType } from "@/types";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 1536 },
    items: 6,
    slidesToSlide: 3,
  },
  largeDesktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 5,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

export const courseData: SimpleCourseType[] = [
  {
    id: "1",
    imageurl:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "The complete 2023 Web Development BootCamp",
    author: "avom",
    price: 19.99,

    description:
      "Crash Course Electronics and PCB Design Bestseller Updated July 2023111 total hoursBeginner LevelSubtitles Learn Electronics and PCB Design from the Ground up with Altium CircuitMaker and Labcenter Proteus",

    classification: "Bestseller",
  },
  {
    id: "2",
    imageurl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fGB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "100 Days of code: The Complete Python Programming",
    author: "Dr. Angela  yu",
    price: 21.99,
    description:
      "Learn Electronics and PCB Design from the Ground up with Altium CircuitMaker and Labcenter Proteus",
  },
  {
    id: " 3",
    imageurl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "The complete python BootCamp From Zero",
    author: "jose Portilla",
    price: 99.99,
    description:
      "Create stunning images with 3ds Max 2022 and Corona Renderer 7. Learn the skills from the real expert.",
    classification: "Bestseller",
  },
  {
    id: "4",
    imageurl:
      "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Water Bottle",
    author: "Dr. Angela  yu",
    price: 14.99,
    description: "Some text about the product..",
  },
  {
    id: "5",
    imageurl:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Vans sneakers",
    author: "Dr. Angela  yu",
    price: 38.99,
    description: "Some text about the product..",
  },
  {
    id: "6",
    imageurl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Coco Noir",
    author: "Dr. Angela  yu",
    price: 149.99,
    description:
      "Get the foundation in business analysis you need to solve your organization's biggest problems.",
    classification: "Bestseller",
  },
  {
    id: "7",
    imageurl:
      "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Sunglasses",
    author: "Dr. Angela  yu",
    price: 38.99,
    description:
      "Learn how to speak so people listen from a 5-time TED speaker.",
  },
  {
    id: "8",
    imageurl:
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Dove cream",
    author: "Dr. Angela  yu",
    price: 49.99,
    description:
      "Learn professional investment analysis techniques for real estate investing in residential and commercial properties",
  },
];

export const subCategory = [
  {
    name: "Excel",
    content:
      "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic formulas. Both small businesses and large companies use Excel to turn their raw data into actionable insights.",
    title: "Analyze and visualize data with Excel",
  },
  {
    name: "Web Development",
    content:
      "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
    title: "Build websites and applications with Web Development",
  },
  {
    name: "JavaScript",
    content:
      "JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. With JavaScript online classes, you can learn to build ...",
    title: "Grow your software development skills with JavaScript3",
  },
  {
    name: "Data Science",
    content:
      "Data science application is an in-demand skill in many industries worldwide — including finance, transportation, education, manufacturing, human resources, and banking. Explore data science courses with Python, statistics, machine learning, and more to grow your knowledge. Get data science training if you’re into research, statistics, ...",
    title: "Lead data-driven decisions with Data Science",
  },
  {
    name: "Amazon AWS",
    content:
      "Amazon Web Services (AWS) is a cloud computing platform with more than 200 featured services. Whether or not you aim for certification, an AWS course offers the theory and practical skills you need to land a job in cloud development, sales, engineering, networking, and more. The better you become at cloud computing, the more ...",
    title: "Become an expert in cloud computing with AWS Certification",
  },
  {
    name: "Drawing",
    content:
      "Want to start drawing for fun or take your craft to the next level? Explore our online drawing classes and learn pencil drawing, figure drawing, cartoon drawing, character drawing for cartoons and anime, illustration, sketching, shading and more. Take an overview course on the fundamentals of drawing or zero in on an area ",
    title: "Expand your creative skillset with Drawing",
  },
];
