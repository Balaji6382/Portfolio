const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Medical Recommendation System */}
          <div className="w-full flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Medical Recommendation System
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              The Medicine Recommendation System is a personalized platform leveraging machine learning to suggest tailored medication options based on patient-specific data. It enhances healthcare decision-making by providing data-driven treatment recommendations.
            </p>
            
          </div>

          {/* MultiPDF Chat App AI AGENT */}
          <div className="w-full flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              MultiPDF Chat App AI AGENT
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              The MultiPDF Chat App AI AGENT is designed to work efficiently with multiple PDFs. It extracts key insights using AI technologies like Langchain, Google Gemini 1.5, and FAISS Vector DB. The chatbot trained on PDF content answers questions and streamlines your workflow.
            </p>
          
          </div>
        </div>

        {/* Project 3 and 4 in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Chatalong App */}
          <div className="w-full flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              Chatalong App
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              A Django-based web app that helps manage and display a collection of Sanskrit books. Users can explore texts, listen to synchronized audio recordings, and track their reading progress.
            </p>
          
          </div>

          {/* IV Bag Monitoring Alert System */}
          <div className="w-full flex flex-col items-center bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#fe5617] font-extrabold text-[32px] mb-4">
              IV Bag Monitoring Alert System for Hospitals Using ESP32 Microcontroller
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              The Automated IV Bag Monitoring Alert System improves patient safety by using an ESP32 microcontroller and weight sensors to track IV fluid levels in real-time. Instant alerts are sent to healthcare staff when levels are low or a bag needs replacement.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
