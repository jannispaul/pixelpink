// import React from "react"
// import { StaticQuery, graphql } from "gatsby"
// // import SingleProject from "../components/SingleProject"
// // import React from "react"
// import { Carousel } from "react-responsive-carousel"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import "../theme/carousel.css"
// import SingleProject from "../components/SingleProject";


// import Img from "gatsby-image"


// class HeroProject extends React.Component {
//     // render() {
  
//     constructor(props) {
//       super(props);
//       this.projects = [
//         {
//           images: this.props.data.qvsta,
//           imgAltText: ["Alt descritopn", "Alt descritopn 2", "Alt descritopn 3"],
//           company: "Arztpraxis Schulzendorf",
//           title: "Revolutionieren traditionelles Modelbooking",
//           id: "01"
//         },
//       ];
//     }

    
//     render() {
//       return (
//         <SingleProject
//         img={this.projects.images.edges}
//         imgAltText={this.projects.imgAltText}
//         company={this.projects.company}
//         title={this.projects.title}
//         key={i}
//       />
        
//         //   {this.projects.map((project, i) => (
//         //     <SingleProject
//         //       img={project.images.edges}
//         //       imgAltText={project.imgAltText}
//         //       company={project.company}
//         //       title={project.title}
//         //       key={i}
//         //     />
//         //   ))}
          
//       );
//     }
//   }

// //   export const query = graphql`
// //   query {

// //     qvsta: allFile(filter: { relativeDirectory: { eq: "work/qvsta" } }, sort: {fields: name}) {
// //       edges {
// //         node {
// //           ...ProjectImagesFragment
// //         }
// //       }
// //     }

// //   }
  
// // `;

// export default HeroProject;

// <StaticQuery
//         query={graphql`
//             query {
//                 qvsta: allFile(filter: { relativeDirectory: { eq: "work/qvsta" } }, sort: {fields: name}) {
//                         edges {
//                             node {
//                             ...ProjectImagesFragment
//                             }
//                         }
//                     }   

//                 }
            
//         `}
//         render={data => (
//             <HeroProject this.props={data} />
//         )}
//     />