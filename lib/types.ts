// Interface for wrapper component that holds children as React nodes
interface WrapperFunctionTypes {
  children: React.ReactNode; // 'children' can be any valid React component or JSX element
}

// Interface for text component with alignment and children as React nodes
interface TextType {
  children: React.ReactNode; // 'children' is the content of the text
  align: string; // 'align' defines the text alignment (left, center, right, etc.)
}

// Interface for a feature section with title, description, and a list of advantages
interface FeatureType {
  title: string; // Title of the feature
  subTitle: string; // Subtitle of the feature
  headerDescription: string; // Description at the header of the feature section
  advantages: {
    title: string; // Title of the individual advantage
    description: string; // Description of the individual advantage
  }[]; // List of advantages as an array of objects
  footerDescription: string; // Description at the footer of the feature section
  buttonText: string; // Text for the button
  imagePath: string; // Path for the image associated with the feature
  index: number; // Index to identify the feature section
}

// Interface for offers with title, description, icon, and color details
interface OfferType {
  title: string; // Title of the offer
  motive: string; // Motive or reason behind the offer
  description: string; // Description of the offer
  icon: React.ReactNode; // React component or icon associated with the offer
  color: string; // Color associated with the offer (for styling)
}

// Interface for testimonials with an icon, description, author, and designation
interface TestimonialType {
  icon: string; // Icon associated with the testimonial (could be a URL or icon name)
  description: string; // Testimonial description
  author: string; // Name of the author of the testimonial
  designation: string; // Designation or role of the author
}

// Interface for values with icon, value, and title for a value-driven section
interface ValueType {
  icon: string; // Icon associated with the value (could be a URL or icon name)
  value: string; // The value itself (e.g., a number, percentage, etc.)
  title: string; // Title of the value section
}

// Exporting all the types to be used in other parts of the app
export type {
  WrapperFunctionTypes,
  TextType,
  FeatureType,
  OfferType,
  TestimonialType,
  ValueType,
};
