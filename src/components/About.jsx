import {
  FaPython,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiKeras,
  SiHuggingface,
  SiNumpy,
  SiOpencv,
  SiDjango,
  SiFlask,
  SiWordpress,
  SiMysql,
  SiUbuntu,
  SiAnaconda,
  SiJupyter,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const skills = [
  { icon: FaPython, color: "#3776AB", name: "Python" },
  { icon: SiPandas, color: "#150458", name: "Pandas" },
  { icon: SiNumpy, color: "#013243", name: "NumPy" },
  { icon: SiTensorflow, color: "#38bdf8", name: "Tensorflow" },
  { icon: SiPytorch, color: "#EE4C2C", name: "PyTorch" },
  { icon: SiScikitlearn, color: "#F7931E", name: "Scikit-learn" },
  { icon: SiKeras, color: "#D00000", name: "Keras" },
  { icon: SiHuggingface, color: "#FFD21E", name: "Hugging Face" },
  { icon: SiOpencv, color: "#5C3EE8", name: "OpenCV" },
  { icon: SiDjango, color: "#092E20", name: "Django" },
  { icon: SiFlask, color: "#000", name: "Flask" },
  { icon: SiWordpress, color: "#21759B", name: "WordPress" },
  { icon: SiMysql, color: "#4479A1", name: "MySQL" },
  { icon: FaGitAlt, color: "#f05032", name: "Git" },
  { icon: FaGithub, color: "#000", name: "GitHub" },
  { icon: SiUbuntu, color: "#E95420", name: "Ubuntu" },
  { icon: DiVisualstudio, color: "#0078d7", name: "VS Code" },
  { icon: SiAnaconda, color: "#44A833", name: "Anaconda" },
  { icon: SiJupyter, color: "#F37626", name: "Jupyter Notebook" },
  { icon: FaFigma, color: "#F24E1E", name: "Figma" },
];

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        


<p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
Hi there! I’m <span className="font-bold text-[#fe5617]">Balaji D</span>, 
a third-year student pursuing <span className="font-bold text-[#fe5617]">BSc in Artificial Intelligence and Machine Learning</span> 
at <span className="font-bold text-[#fe5617]">Sree Saraswathi Thyagaraja College - STC Pollachi</span>. 
While my studies keep me busy, my real passion lies in exploring the endless possibilities that AI and ML offer to solve everyday 
problems 
<br /><br />
I’m well-versed in tools and technologies like <span className="font-bold text-[#fe5617]">Python, TensorFlow, PyTorch, Scikit-learn, and SQL</span>, 
and I love applying these skills to real-world projects. Whether through internships or personal projects, I’m constantly learning 
and challenging myself to build smarter systems and dive deeper into the world of AI.
<br /><br />
I’m from <span className="font-bold text-[#fe5617]">Udumalpet, Tamil Nadu</span>, and my background gives me a unique perspective 
on how technology can shape our world. I believe that understanding different viewpoints helps me approach challenges with creativity 
and a fresh outlook, and I’m always eager to learn from others.
<br /><br />
Looking ahead, I’m excited to contribute to the AI/ML community, collaborate on innovative projects, and continue growing in this 
ever-evolving field. If you’re passionate about AI and would like to connect, let’s chat and explore how we can work together!
</p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#fe5617] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-200"
                aria-label={skill.name}
              >
                <skill.icon size={40} style={{ color: skill.color }} />
                <span className="font-bold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
