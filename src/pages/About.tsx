import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, Users2, Globe, Target, 
  ChevronRight, Instagram, Linkedin, 
  MessageSquare, Rocket, Brain, Network,
  Phone, GraduationCap, Building2, Users,
  Eye, BarChart as ChartBar
} from 'lucide-react';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { NavigationButtons } from '../components/NavigationButtons';
import { useScrollToTop } from '../hooks/useScrollToTop';

function LeadershipCard({ leader, variant = "default" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${
        variant === "advisory" 
          ? "from-blue-500/5 to-purple-500/5" 
          : "from-purple-500/5 to-blue-500/5"
      } rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`}></div>
      <div className="relative p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 h-full">
        {/* Profile Image */}
        {leader.image && (
          <div className="mb-4 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/10"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {leader.name}
        </h3>
        <div className="text-gray-400 space-y-1">
          {leader.roles.map((role, index) => (
            <p key={index} className="text-sm">{role}</p>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {leader.phone && (
            <a
              href={`tel:${leader.phone}`}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function About() {
  useScrollToTop();

  const advisoryPanel = [
    {
      name: "Dr. K. Karunakaran",
      roles: ["Vice Chancellor", "Mohan Babu University"],
      linkedin: "https://www.linkedin.com/in/karunakaran-k-798ab99a/",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEc8PR-IWJudQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699868976476?e=1748476800&v=beta&t=Ow2UVFIeja71IxYSTcLJfErPfcXMT5dC9yCzg7rTLoU"
    },
    {
      name: "Dr. B. Narendra Kumar Rao",
      roles: ["Head AIML Department", "Mohan Babu University"],
      linkedin: "https://www.linkedin.com/in/drbnkr/",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEf6KvDcPNeCQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679655898567?e=1748476800&v=beta&t=IUQI9Zr1A7m1DnS0GLDwiJkDKAP7w9ZMgyE42secdOo"
    },
    {
      name: "Dr. J. Avanija",
      roles: [
        "Deputy Dean APT",
        "Faculty Head",
        "The Coding Club",
        "Mohan Babu University"
      ],
      linkedin: "https://www.linkedin.com/in/dr-avanija-j-a4383031/",
      image: "https://media.licdn.com/dms/image/v2/C5603AQHpVjsOIUNhzQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516484438442?e=1748476800&v=beta&t=k6dzUuTf2SrDY1t9gmJK-dhpZ_CQ4iav2kXoXrudDlo"
    },
    {
      name: "Mr. Zaid Bin Kamil",
      roles: [
        "Placement Manager - SOC",
        "Faculty Advisor",
        "The Coding Club",
        "Mohan Babu University"
      ],
      linkedin: "https://www.linkedin.com/in/zaidbinkamil/",
      image: "https://media.licdn.com/dms/image/D5603AQHjqQJ8Y9Z9Yw/profile-displayphoto-shrink_800_800/0/1689612664387?e=1748476800&v=beta&t=9VwF9VwF9VwF9VwF9VwF9VwF9VwF9VwF9VwF9VwF"
    },
    {
      name: "Dr. Harshavardhan Reddy",
      roles: ["Placement Manager - SOE", "Mohan Babu University"],
      image: "https://example.com/placeholder.jpg"
    },
    {
      name: "Mr. N. Balakrishna",
      roles: [
        "Assistant Professor",
        "Department of AIML",
        "Mohan Babu University"
      ],
      image: "https://example.com/placeholder.jpg"
    }
  ];

  const studentLeadership = [
    {
      name: "Allam Gowri Shankar",
      roles: [
        "Event Head AIML",
        "Chairperson - The Coding Club",
        "Mohan Babu University"
      ],
      linkedin: "https://www.linkedin.com/in/allamgowrishankar/",
      phone: "+91 70137 83977",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEz989kguuOGA/profile-displayphoto-shrink_400_400/B56ZRd4q_mHoAg-/0/1736741925909?e=1748476800&v=beta&t=_otekhVbTKiC54FD--WiU1BpQ6_GDwCIrBpytTqKJR4"
    },
    {
      name: "Damarla Pavan",
      roles: [
        "Event Head AIML",
        "Vice Chairperson - The Coding Club",
        "Mohan Babu University"
      ],
      linkedin: "https://www.linkedin.com/in/pavan-damarla/",
      phone: "+91 70758 18399",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFCwO3HH7vz2w/profile-displayphoto-shrink_400_400/B56ZPTAgqPG4Ag-/0/1734411947292?e=1748476800&v=beta&t=uNhS9Bi4Ar3S9Iv2y82sn_ZIq1LfiwV7jCBI-FHJSeY"
    },
    {
      name: "Uzma Anjum",
      roles: [
        "Treasurer - The Coding Club",
        "Mohan Babu University"
      ],
      linkedin: "https://www.linkedin.com/in/uzma-anjum-65b1b0258/",
      phone: "+91 6305 820 221",
      image: "https://media.licdn.com/dms/image/D5603AQFxm-f_8SfUQw/profile-displayphoto-shrink_800_800/0/1689612664387?e=1748476800&v=beta&t=9VwF9VwF9VwF9VwF9VwF9VwF9VwF9VwF9VwF9VwF"
    },
    {
      name: "Manipulam Prabhudas",
      roles: [
        "Hackathon Lead",
        "Mohan Babu University"
      ],
      linkedin: "https://www.linkedin.com/in/prabhu98/",
      phone: "+91 73867 66954",
      image: "https://media.licdn.com/dms/image/v2/D5603AQH9CmEvg7myrg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712512296536?e=1748476800&v=beta&t=WGLPLE7R5-9ud63Y_91MyPXCjDpilEh_5H71pvfI9kA"
    },
    {
      name: "Jashwanth Rana",
      roles: [
        "Hackathon Co-Lead",
        "Mohan Babu University"
      ],
      linkedin: "https://www.linkedin.com/in/jaswanth-rana-sanga-70b470277/",
      phone: "+91 94400 44541",
      image: "https://media.licdn.com/dms/image/D5603AQFxm-f_8SfUQw/profile-displayphoto-shrink_800_800/0/1689612664387?e=1748476800&v=beta&t=9VwF9VwF9VwF9VwF9VwF9VwF9VwF9VwF9VwF9VwF"
    },
    {
      name: "Muvva Akshaya",
      roles: [
        "webmaster",
        "Mohan Babu University"
      ],
      linkedin: "https://www.linkedin.com/in/akshaya-muvva-041b20258/",
      phone: "+91 9",
      image: "https://media.licdn.com/dms/image/v2/D5603AQF9j0-nuS1McA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718293233709?e=1748476800&v=beta&t=kdTJmMAj6TrAdMu2mh67CB3ujltiZcc90Yy5katiUA8"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <NavigationButtons />
      
      {/* Header Section */}
      <section className="min-h-[60vh] relative flex items-center justify-center pt-24 pb-12">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div 
              className="relative inline-block mb-8"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              <div className="relative p-6 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
                <Building2 className="w-12 h-12 text-blue-400" />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              Skill Sprint 2025
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Skill Sprint is a premier hackathon focused on LMS (Learning Management System) platform development. Organized by Hubexus and Tech Projects Hub in collaboration with academic institutions, this event challenges participants to build innovative learning solutions with real-world company constraints.
            </p>
            <p className="text-lg text-gray-300">
              This hackathon brings together developers, designers, and innovators from across India to create cutting-edge educational technology solutions that can transform how we learn and teach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advisory Panel Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Organizing Partners
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Hubexus Team",
                roles: ["Lead Organizer", "Technology Partner"],
                image: "https://via.placeholder.com/150x150/3B82F6/FFFFFF?text=Hubexus"
              },
              {
                name: "Tech Projects Hub",
                roles: ["Co-Organizer", "Innovation Partner"],
                image: "https://via.placeholder.com/150x150/8B5CF6/FFFFFF?text=TPH"
              },
              ...advisoryPanel.slice(0, 4)
            ].map((leader) => (
              <LeadershipCard
                key={leader.name}
                leader={leader}
                variant="advisory"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Student Leadership Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Student Leadership
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentLeadership.map((leader) => (
              <LeadershipCard
                key={leader.name}
                leader={leader}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Coding Club Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            The Coding Club
          </motion.h2>

          {/* Who We Are Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>
                <img
                  src="https://media.licdn.com/dms/image/v2/D5622AQEPXJvEeKPDTg/feedshare-shrink_2048_1536/B56ZQ01WLaHoAo-/0/1736053190958?e=1745452800&v=beta&t=dj_0R2dmDysZkQjKxIice6YqQFYI2bxVG7EZGOwTdtU"
                  alt="The Coding Club Team"
                  className="relative w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                About the Event
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Skill Sprint is designed to challenge participants to build comprehensive LMS platforms that address real-world educational needs. Teams will work within specific company constraints to create solutions that are both innovative and practical.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The hackathon emphasizes practical application, user experience, and scalable architecture in educational technology development.
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: <Target className="w-12 h-12 text-blue-400" />,
                title: "Our Mission",
                description: "To foster innovation in educational technology by bringing together talented developers to create impactful LMS solutions that can transform learning experiences.",
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                icon: <Eye className="w-12 h-12 text-purple-400" />,
                title: "Our Vision",
                description: "To become the premier platform for educational technology innovation, connecting industry needs with creative solutions from talented developers across India.",
                gradient: "from-purple-500/20 to-blue-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`}></div>
                <div className="relative h-full p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                number: "48", 
                label: "Hours of Innovation", 
                icon: <Users2 className="text-blue-400" />,
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              { 
                number: "₹50K+", 
                label: "Total Prize Money", 
                icon: <Brain className="text-purple-400" />,
                gradient: "from-purple-500/20 to-blue-500/20"
              },
              { 
                number: "Open", 
                label: "For All States in India", 
                icon: <ChartBar className="text-emerald-400" />,
                gradient: "from-emerald-500/20 to-blue-500/20"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`}></div>
                <div className="relative h-full p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{stat.number}</h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Role in XHorizon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-[3rem] blur-3xl"></div>
            <div className="relative p-8 rounded-[3rem] backdrop-blur-sm border border-white/10 text-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center"
              >
                <Rocket className="w-10 h-10 text-blue-400" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Why Skill Sprint?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Skill Sprint focuses on one of the most important sectors in technology today - education. By building LMS platforms, participants contribute to solutions that can impact millions of learners while gaining valuable experience in enterprise-level software development.
              </p>
            </div>
          </motion.div>

          {/* Join Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Join Skill Sprint 2025
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Build the future of education technology in 48 hours!
            </p>
            <Link to="/tracks">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                Register Now
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;