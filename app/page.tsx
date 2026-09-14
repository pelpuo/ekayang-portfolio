import Image from "next/image";
import "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaGoogleScholar } from "react-icons/fa6";
import Footer from "@/components/footer/Footer";
import Publication from "@/components/publication/Publication";

const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/ekayang-portfolio' : '';

export default function Home() {
  return (
    <div className="w-full h-full bg-gray-950 mx-auto min-h-screen flex flex-col items-center">
      <div className="w-full mx-auto min-h-screen flex flex-col items-center">
        <Navbar />
        <hr className="w-full h-0.5 border-gray-800 mb-4" />
        <main className="max-w-[1260px] w-full mt-6 px-4 flex flex-col sm:grid sm:grid-cols-8 sm:gap-6 items-start">
          <div className="col-span-2 mb-6 sm:px-0 px-6 flex flex-col items-center sm:items-start">
            <Image
              src={`${prefix}/images/headshot_alt.png`}
              alt="avatar"
              height={160}
              width={160}
              className="rounded-full"
            />
            <h2 className="text-xl font-semibold mt-4">Edwin Pelpuo Kayang</h2>
            <p className="text-md text-gray-600 text-left mt-1">PhD Student</p>
            <p className="text-md text-gray-600 left">
              Arizona State University
            </p>

            <div className="socials text-left mt-2 flex items-center gap-6 sm:block">
              {/* Social media icons/links can be added here */}

              {/* Email */}
              <a
                href="mailto:epkayang@gmail.com"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <MdEmail className="inline mr-2" size={16} />
                Email
              </a>
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/edwin-kayang-52295719b/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <BsLinkedin className="inline mr-2" size={16} />
                LinkedIn
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/pelpuo"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <BsGithub className="inline mr-2" size={16} />
                GitHub
              </a>
              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?user=f3EDFGcAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <FaGoogleScholar className="inline mr-2" size={16} />
                Google Scholar
              </a>
            </div>
          </div>

          <section className="col-span-6 flex flex-col items-start px-4">
            {/* Right-column details go here */}

            {/* About Me */}
            <section className="w-full mb-12" id="about">
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <div className="space-y-4 leading-relaxed text-justify">
                <p className="text-justify">
                  I am a fourth-year <strong>Computer Science PhD student</strong> at{" "}
                  <strong>Arizona State University</strong>, where I serve as a Research
                  Assistant at the{" "}
                  <strong>
                    Secure, Trusted and Assured Microelectronics (STAM) Center
                  </strong>{" "}
                  under the supervision of <strong>Prof. Michel A. Kinsy</strong>.
                </p>
                </div>
                <br />

                <p className="text-justify">
                  My research lies at the intersection of <strong>compilers</strong>,{" "}
                  <strong>program analysis</strong>, and{" "}
                  <strong>computer architecture</strong>. I develop techniques for
                  understanding and transforming programs by incorporating information about{" "}
                  <strong>runtime behavior</strong>, <strong>hardware capabilities</strong>,
                  and <strong>system constraints</strong> into the compilation and
                  optimization process. My work spans <strong>compiler optimization</strong>,{" "}
                  <strong>binary analysis and instrumentation</strong>,{" "}
                  <strong>profile-guided optimization</strong>, and{" "}
                  <strong>hardware-assisted security</strong>, with the broader goal of
                  enabling software to better adapt to emerging computing systems.
                </p>

                <br />

                <p className="text-justify">
                  I am also interested in building practical, open-source research tools,
                  particularly for the <strong>RISC-V</strong> ecosystem.
                </p>

              <div className="">
                <h3 className="text-xl font-semibold mb-4 mt-10">
                  Focus Areas
                </h3>
                {/* Programming Languages */}
                <div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Binary Analysis",
                      "Compilers",
                      "Systems Security",
                      "Machine Learning",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-1.5 bg-gray-900 font-medium rounded-full text-sm shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Publications Section */}
            <section className="my-12 w-full" id="publications">
              <h2 className="text-3xl font-semibold mb-10 text-white">
                Publications
              </h2>

              <h3 className="text-xl font-semibold mb-4 mt-10 text-gray-500">
                Journal Articles
              </h3>
              <hr className="border-gray-900 mb-12" />

              <Publication
                  date=""
                  title="R-Visor: Towards Extensible Dynamic Binary Instrumentation and Analysis for the RISC-V Instruction Set Architecture"
                  authors="Edwin Kayang, Mishel Jyothis Paul, Eric Jahns, Muslum Ozgur Ozmen, Milan Stojkov, Kevin Rudd, Michel A. Kinsy"
                  venue="ACM Transactions on Embedded Computing Systems"
                  paperUrl=""
                  status="Under Review"
                />
              
              <h3 className="text-xl font-semibold mb-4 mt-24 text-gray-500">
                Conference Papers
              </h3>
              <hr className="border-gray-900 mb-12" />

              <div className="flex flex-col">
                <Publication
                  date="Mar 2027"
                  title="LICHEN: Region-Aware Compiler Optimization Under Hard Binary-Size Constraints"
                  authors="Edwin P. Kayang, Mishel Jyothis Paul, Nges Brian Njungle, Michel A. Kinsy"
                  venue="Design, Automation and Test in Europe Conference"
                  status="Under Review"
                />

                <Publication
                  date="Sept 2026"
                  title="EnForge: Enforcing Memory Safety in Legacy Applications through Capability Injection"
                  authors="Edwin P. Kayang, Mishel Jyothis Paul, Michel A. Kinsy"
                  venue="Asian Hardware Oriented Security and Trust Symposium"
                  status="Just Accepted"
                />

                <Publication
                  date="Sept 2026"
                  title="ARCHE: Hardware-Managed Pointer Provenance Propagation for Capability Architectures"
                  authors="Mishel Jyothis Paul, Edwin Kayang, Eric Jahns, Michel A. Kinsy"
                  venue="Asian Hardware Oriented Security and Trust Symposium"
                  status="Just Accepted"
                />

                <Publication
                  date="Aug 2026"
                  title="FLAVIUM: A Multi-Agent System for Reactive Defensive Cyber Operations with Distilled Neural Policies"
                  authors="Luigi Mastromauro, Yaphet Elias Weldegebriel, Mishel Jyothis Paul, Edwin Kayang, Muslum Ozgur Ozmen, Michel A. Kinsy"
                  venue="IEEE High Performance Extreme Computing"
                  status="Just Accepted"
                />

                <Publication
                  date="Oct 2025"
                  title="DALC-CT: Dynamic Analysis of Low-Level Code Traces for Constant-Time Verification"
                  authors="Nges Brian Njungle, Edwin Kayang, Mishel Jyothis Paul, Michel A. Kinsy"
                  venue="arXiv preprint arXiv:2604.16832"
                  paperUrl="https://arxiv.org/abs/2604.16832"
                />

                <Publication
                  date="Dec 2025"
                  title="Panoptes: A Framework for Profile Clustering and Context-Aware Binary Optimization"
                  authors="Edwin Kayang, Eric Jahns, Mishel Jyothis Paul, Michel A. Kinsy"
                  venue="ACM/IEEE International Conference on Software Engineering"
                  paperUrl="https://dl.acm.org/doi/10.1145/3744916.3787767"
                />

                <Publication
                  date="Oct 2025"
                  title="Prismo: A Decision Support System for Privacy-Preserving ML Framework Selection"
                  authors="Nges Brian Njungle, Eric Jahns, Luigi Mastromauro, Edwin Kayang, Milan Stojkov, Michel A. Kinsy"
                  venue="arXiv preprint arXiv:2510.09985"
                  paperUrl="https://arxiv.org/pdf/2510.09985"
                />

                <Publication
                  date="Sept 2025"
                  title="AQUILA: A Flexible Architecture Guideline for Building Custom Distributed Systems Testbeds"
                  authors="Luigi Mastromauro, Edwin Kayang, Mishel Jyothis Paul, Eric Jahns, Muslum Ozgur Ozmen, Michel A. Kinsy"
                  venue="IEEE/IFIP International Conference on Embedded and Ubiquitous Computing"
                  status="Just Accepted"
                  paperUrl="https://doi.org/10.1109/EUC66494.2025.00009"
                />

                <Publication
                  date="June 2025"
                  title="R-Visor: An Extensible Dynamic Binary Instrumentation and Analysis Framework for Open Instruction Set Architectures"
                  authors="Edwin Kayang, Mishel Jyothis Paul, Eric Jahns, Muslum Ozgur Ozmen, Milan Stojkov, Kevin Rudd, Michel A. Kinsy"
                  venue="ACM SIGPLAN/SIGBED Conference on Languages Compilers Tools and Theory for Embedded Systems"
                  paperUrl="https://dl.acm.org/doi/10.1145/3735452.3735522"
                />

                <Publication
                  date="Nov 2021"
                  title="Autograd: Automated grading software for mobile game assignments in Suacode courses"
                  authors="Prince Steven Annor, Edwin Kayang, Samuel Boateng, George Boateng"
                  venue="Computer Science Education Research Conference"
                  paperUrl="https://doi.org/10.1145/3507923.3507954"
                />
              </div>
            </section>
            {/* Artifacts */}
            <section className="my-12 mb-24 w-full" id="artifacts">
              <h2 className="text-3xl font-semibold mb-10">Artifacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* R-Visor */}
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">R-Visor</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    An extensible Dynamic Binary Instrumentation (DBI) and
                    analysis framework with initial support for the RISC-V
                    Instruction Set Architecture (ISA).
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools/Techniques: C, RISC-V Assembly, Binary Analysis,
                    Domain Specific Languages
                  </p>
                  <span className="text-sm block">
                    [
                    <a
                      href="https://trireme-riscv.org/rvisor/rvisor.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <span className="text-blue-400 underline">
                        Documentation
                      </span>
                    </a>
                    ]
                  </span>
                </div>

                {/* Panoptes */}
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">Panoptes</h3>
                  <p className="text-sm text-gray-300 mb-2">
                    A framework for profile clustering and context-aware binary
                    optimization designed to facilitate optimization effort by
                    promoting optimization reuse between similar binaries.
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools/Techniques: Binary Analysis, Compilers, Machine
                    Learning, Python, C/C++
                  </p>
                  <span className="text-sm block">
                    [
                    <a
                      href="https://panoptes.ascslab-tools.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      <span className="text-blue-400 underline">Tool</span>
                    </a>
                    ]
                  </span>
                </div>
              </div>
            </section>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
