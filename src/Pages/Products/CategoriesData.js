import { FaBacteria } from "react-icons/fa6";
import { CiMedicalCross, CiMedicalMask } from "react-icons/ci";
import { LuSunMedium } from "react-icons/lu";

const CategoriesData = [
    {
        id: 1,
        Category: "Psychology",
        cover: require("../../Assets/CategoryPage/Sports-psychology.jpg"),
        link: "pukhya/psychology",
        subcategories: [
            {
                id: 1,
                subcategory: "Thought Technology",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "Whether you are a psychologist, a physiotherapist, a nurse practitioner or a medical doctor, our powerful and easy to use physiological monitoring and biofeedback systems will meet your needs for quality, flexibility and reliability.",
                cover: require("../../Assets/Products/Psychology/thoughttecm.png"),
                brand: require("../../Assets/Products/Psychology/thoughttec-brand.png"),
                backcolor: "#2E8E91",
                Products: [
                    {
                        id: 1,
                        title: "Biofeedback",
                        title2: "Biofeedback Expert System",
                        cover: require("../../Assets/Products/Psychology/Bio_Expert.jpg"),
                        description: "Get the broadest physiological perspective of your client’s stress and relaxation responses with our most complete physiological monitoring and multimedia biofeedback system. ProComp Infiniti gives you the ability to do classic biofeedback with up to 8 channels of physiology, including skin conductance, peripheral temperature, heart rate variability, respiration rate and muscle tension. The ability to include 1 or 2 channels of neurofeedback and passive infrared (pIR) monitoring of frontal lobe activation makes this package the most versatile of all.",
                        description2: "Our top of the line physiological biofeedback system combines the versatile 8 channel ProComp Infiniti device with a full array of sensors, BioGraph Infiniti and the 360 suite. This complete system, which combines classic physiological biofeedback, HRV training, neurofeedback and passive infrared biofeedback into one set of tools is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological options.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/biofeedbackfet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/biofeedback h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/biofeedback h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Neurofeedback ",
                        title2: "Neurofeedback Expert System",
                        cover: require("../../Assets/Products/Psychology/Neuro_Expert.jpg"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/biofeedbackfet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/biofeedback h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/biofeedback h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Heart Rate Variability",
                        title2: "Heart rate variability biofeedback is a powerful method for exercising your client’s cardiovascular system.",
                        cover: require("../../Assets/Products/Psychology/HRV_Suite.jpg"),
                        description: "Teaching your clients to practice slow regular breathing exercises as often as possible, 10 to 20 minutes a day, will help them learn important self-regulation skills and maintain higher levels of heart rate variability. Assess and document your client’s baseline HRV levels by running the 3 step HRV assessment.Teach your clients awareness and control of breathing patterns and how breathing influences heart rate.Train your clients to use breath control to entrain deep and effective relaxation.",
                        description2: "The HRV Suite works with the ProComp 2, ProComp 5, and ProComp Infiniti, a medical grade physiological monitoring device, with easy-to-fasten finger pulse and respiration sensors to provide direct measures of heart rate and breathing. Prerequisites HRV suite alone can only be purchased by existing users who own : ProComp 2, ProComp 5, and ProComp Infiniti with BioGraph 6.1 or later HR/BVP sensor Respiration sensor Or for customers who want to add the suite to their newly purchased ProComp 2, ProComp 5, and ProComp Infiniti system with EEG or Physiology suite.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/HRV_Suite fet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/HRV_Suite h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/HRV_Suite h2.jpg"),
                            },
                        ],
                    },

                    {
                        id: 5,
                        title: "Peak Performance",
                        cover: require("../../Assets/Products/Psychology/PeakPerformance.jpg"),
                        description: "The pinnacle of our Peak Performance packages is the expert package. Built for the advanced biofeedback practitioner, get a full lineup of software and hardware to fully train your athlete’s psychophysiology, and have the opportunity to completely bridge the gap between mind and body for true peak performance. This package is designed to help your athletes learn to make better decisions, increase their consistency, and make the micro adjustments necessary to look out from the top of the podium instead of watch from the locker room.",
                        description2: "The pinnacle of our Peak Performance packages is the expert package. Built for the advanced biofeedback practitioner, get a full lineup of software and hardware to fully train your athlete’s psychophysiology, and have the opportunity to completely bridge the gap between mind and body for true peak performance. This package is designed to help your athletes learn to make better decisions, increase their consistency, and make the micro adjustments necessary to look out from the top of the podium instead of watch from the locker room.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/Peak Performance fet.png"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/Peak Performance h1.png"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/Peak Performance h2.png"),
                            },
                        ],
                    },
                    {
                        id: 6,
                        title: "Neuro balance system",
                        cover: require("../../Assets/Products/Psychology/Products/Neuro balance system.jpg"),
                        description: "To be in balance, not worrying about possibly falling - most people never give this much thought and take this ability for granted. But up to 22 percent of male and 36 percent of female population at least sporadically complain about dizziness and vertigo issues. Among the age group 80+ vertigo is impairment number 1 - more than 39 percent of this age group struggle with lack of balance and vertigo issues. Consulting their medical doctor often does not provide the desired solution: Being told that indeed the patient has a vertigo issue most of the time is old news. Aside from easily treated positional vertigo (benign paroxyxmal positional vertigo BPPV) the specific classification which type of vertigo the patient is experiencing is not truly helpful: Primarily patients expect one thing - help, i.e. solutions to deal with and overcome the daily struggle of staying in balance and not falling. This is exactly the aim of our MediBalance Pro platform solution.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools. Based upon such an initial analysis you can offer a target-oriented training to your client which can help him to regain a better sense of posture and level of body awareness.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/Neuro balance system fet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/Neuro balance system h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/Neuro balance system h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: "Body and mind relaxation system",
                        title2: "Background to the HEG training",
                        cover: require("../../Assets/Products/Psychology/Products/bodyandmindrealaxsys.jpg"),
                        description: "'HEG' stands for hemo-encephalography. With the help of red/infrared light, the degree of redness in a specific area of the forehead is determined locally; this in turn provides conclusions about the degree of intensity of the blood flow and thus also the oxygen supply in this area. In many cases, a change (increase) in blood flow can result in higher oxygen saturation and thus higher performance of the targeted area. When a particular area in the brain is activated to perform a task assigned to it, blood flow in that area increases to maintain the supply of oxygen, glucose, and other important nutrients. This activation is always accompanied by a clear increase in cellular metabolism. It supplies the affected cells with the necessary energy. This process is called HEG biofeedback training. HEG biofeedback is understood as a special form of neurofeedback (EEG-based biofeedback), as it is based on conscious control of blood flow and metabolism in the brain. Clients are conditioned according to the classical principles of biofeedback (feedback of body signals). ",
                        description2: "The decisive advantage of HEG compared to classical neurofeedback sensors is the fast, simple and motionless application and fixation of the sensor. In contrast to EEG biofeedback, HEG biofeedback requires virtually no preparation or follow-up time; the application is free of EEG-typical disturbances and leads to fast conditioning processes that are comprehensible for the client. ADS clients thus learn to control their own attention and concentration in a more targeted manner - this is where new hope arises for the fidgety person. HEG biofeedback is thus particularly suitable for the treatment of children and adults with attention deficit disorder and lack of impulse control, such as ADD / ADHD. In companies and institutions, this method can be used to increase mental performance, alleviate depressive moods, promote concentration and creativity, and develop a trusting and positive mood in everyday life. The motion-insensitive application of the HEG sensor naturally opens up new possibilities for all other biofeedback therapies, e.g. in the treatment of headaches or depression, in which the activation of the frontal brain plays a role.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/bodyandmindrealaxsys fet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/bodyandmindrealaxsys h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/bodyandmindrealaxsys h2.jpg"),
                            },
                        ],
                    },

                ]
            },
            {
                id: 2,
                subcategory: "NeuroTrackerX",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/neurotracker x.png"),
                brand: require("../../Assets/Products/Psychology/neurtrakerlogo.png"),
                backcolor: "#5948be",
                Products: [
                    {
                        id: 2,
                        title: "NeuroTracker ",
                        cover: require("../../Assets/Products/Psychology/Products/NCogniSens h2.png"),
                        description: "NeuroTracker is a leading cognitive training tool shown to enhance brain function. Join thousands who train daily to improve what matters to them.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/NeuroTrackerx.png"),
                                linkname: "neurotrackerx",
                                link: "https://www.neurotrackerx.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/NCogniSens 3D h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/NeuroTracker.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 3,
                subcategory: "Hasomed",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/hasomed.jpg"),
                brand: require("../../Assets/Products/Psychology/hasomedlogo.png"),
                backcolor: "#00002d",
                Products: [
                    {
                        id: 1,
                        title: "Rheacom(SOFTWARE: Screening , Training, Results) ",
                        title2: "Training in mother tongue",
                        cover: require("../../Assets/Products/Psychology/Products/HASOMED-RehaCom-System.jpg"),
                        description: "RehaCom is a comprehensive and sophisticated system of software for computer-assisted cognitive rehabilitation. This practical tool assists the therapist in the rehabilitation of cognitive disorders that affect specific aspects of attention, concentration, memory, perception, activities of daily living and much more.",
                        description2: "PreviousNext RehaComrehacom_panelKinnstuetze_2018_frei By solving tasks, brain processes will be activated and important brain functions will be improved or restored. Successful training means that the user will be better able to cope with the challenges of everyday life. RehaCom can be used even at a very acute stage of injury - and remains relevant through all stages of recovery. Training modules can easily be selected based on a cognitive assessment or by using the growing number of Screening Modules.Training in mother tongue The software has about 30 modules and is also available in 27 other native languages, so patients can work in their mother tongue. The software is auto-adaptive so the difficulty level will rise and fall depending on the performance of the patient. After a period of therapy inside a facility, the patient can also be supervised at home, over the internet, by using RehaCom’s remote supervised training option.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/RehaCom fet.png"),
                                linkname: "Hasomed",
                                link: "https://hasomed.de/en/products/rehacom/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/Rheacom h1.png"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/Rheacom h2.png"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 5,
                subcategory: "NeuroCare Group",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/neurocare.webp"),
                brand: require("../../Assets/Products/Psychology/neurocarelogo.png"),
                backcolor: "#00002d",
                Products: [
                    {
                        id: 1,
                        title: "TMS (Transcranial magnetic simulation)",
                        title2: "TMS systems for clinical practice",
                        cover: require("../../Assets/Products/Psychology/Products/TMS.webp"),
                        description: "With expertise in Transcranial Magnetic Stimulation (TMS), neurocare empowers healthcare professionals, to deliver best practice TMS, in both practice and research settings. See our product range below suited to first-time or advanced users in clinical practice. ",
                        description2: "We also offer researchers a complete range of systems including monophasic, biphasic, and controllable pulse parameter TMS systems, tailored to diverse clinical and research requirements. We are also here to help you and your team feel confident in delivering TMS in practice and following best-practice guidelines of your region. Through the neurocare academy, healthcare professionals can benefit from accredited online TMS training and practical supervision sessions throughout the world. ",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/tmsfet.webp"),
                                linkname: "Neurocaregroup",
                                link: "https://www.neurocaregroup.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/tms high1.webp"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/tms h2.webp"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "TDCS(Transcranial Direct Current stimulation) ",
                        title2: "TDCS(Transcranial Direct Current stimulation) ",
                        cover: require("../../Assets/Products/Psychology/Products/tdcs.webp"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/tdcs fet.webp"),
                                linkname: "Neurocaregroup",
                                link: "https://www.neurocaregroup.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/tdcs fet.webp"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/tds h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "QEEG(Quantitative) ",
                        title2: "QEEG for clinical practice ",
                        cover: require("../../Assets/Products/Psychology/Products/egg.webp"),
                        description: "The neuroConn NEURO PRAX® EEG systems are reliable, robust and easy-to-use full-band DC-EEG devices. As certified Biofeedback devices,  the NEURO PRAX® series demonstrates the high flexibility, user-friendliness and quality of neuroConn technology.",
                        description2: "NEURO PRAX® can be used as a clinical Neurofeedback and Biofeedback systems as well as for multi-channel quantitative EEG. With a wide range of customization available, the NEURO PRAX®  systems can be integrated with non-invasive brain stimulation (NIBS) as well as fMRI technology.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/egg fet.webp"),
                                linkname: "Neurocaregroup",
                                link: "https://www.neurocaregroup.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/eeg fet.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/qeeg h2.webp"),
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: "Actigraphy ",
                        title2: "Actigraphy ",
                        cover: require("../../Assets/Products/Psychology/Products/ActTigraphy.webp"),
                        description: "The ActTrust Actigraph measures specific parameters at the wrist to examine sleep and chronobiology. Designed specifically for medical and research applications, the device is a reliable and intuitive tool for scientists, physicians and therapists.",
                        description2: "This is a device intended for clinical practice and loan to patients over a 1 or 2 week period, to gain insights into sleep-wake routines, exposure to blue light and general activity levels.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/ActTigraphy fet1.webp"),
                                linkname: "Neurocaregroup",
                                link: "https://www.neurocaregroup.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/actigraphy h1.webp"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/actigraphy h2.webp"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 6,
                subcategory: "Ergoneers",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/ergoneers.jpg"),
                brand: require("../../Assets/Products/Psychology/Ergoneerslogo.png"),
                backcolor: "#b57347",
                Products: [
                    {
                        id: 1,
                        title: "Dikablis Eyetracker Dlab ",
                        cover: require("../../Assets/Products/Psychology/Products/eye_tracking_dlab.jpg"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/eye_tracking_dlab fet.jpg"),
                                linkname: "Ergoneers",
                                link: "https://ergoneers.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/eye_tracking_dlab h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/eye_tracking_dlab h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Prophea X",
                        title2: "Our bundles – specific as your requirements",
                        cover: require("../../Assets/Products/Psychology/Products/prophea x.jpg"),
                        description: "Introducing Prophea.X, the most versatile software ecosphere for holistic, human-centered situation analysis.",
                        description2: "As distinct as every aspect of human insights, so diverse are their respective data tools. But what if that was a rule of the past? From the development and improvement of new products and technologies over human performance analysis and neuroscience up to research-based legislative decisions, human-centred data is the new central power source: Delivered by Prophea.X in one single platform. Discover the future spheres of unlimited flexibility and speed with Prophea.X!",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/Prophea_X_fet.png"),
                                linkname: "Ergoneers",
                                link: "https://ergoneers.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/Prophea_X_h2.png"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/Prophea_X_h1.png"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 18,
                subcategory: "Sports vision training",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/svt.gif"),
                brand: require("../../Assets/Products/Psychology/svtlogo.png"),
                backcolor: "#6393be",
                Products: [
                    {
                        id: 1,
                        title: "32 light Sports Vision Trainer ",
                        cover: require("../../Assets/Products/Psychology/Products/svt32.jpg"),
                        description: "The 32 sensor pad SVT™ Is a truly portable system developed for teams and practitioners who want to use the SVT™ in different field locations without the need for AC mains power. Depending on the application, It can be used in landscape or portrait orientations. The unit has stabilising feet for easy setup and use, so there is no need for brackets. The dimensions are 135 cm in width by 60 cm in height, thickness with feet attached is 19 cm.",
                        description2: "After several years or research on how to analyse SVT data and get meaningful information at a single glance, we came up with the SVT Professional software. Compatible with existing SVT datasets, the Professional series of software allows you to graphically visualise, track and compare test results with ease. Leveraging the power of DSP (Digital Signal Processing), SVT Professional can visually show trends in data by pooling information from test results in spatial, frequency and time domains. SVT Professional has all of the features of the standard software and can unlock a wealth of information contained in your existing SVT database.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/svtfet.png"),
                                linkname: "SVT",
                                link: "https://www.sportsvision.com.au/index.html",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/svt.gif"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/svt.gif"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "64 light Sports Vision Trainer ",
                        cover: require("../../Assets/Products/Psychology/Products/svt64.png"),
                        description: "The 80-sensor pad SVT™ is a wall mounted non-portable system, dimensions are 1.25 metres by 1.25 metres and weight is 15 kg.",
                        description2: "After several years or research on how to analyse SVT data and get meaningful information at a single glance, we came up with the SVT Professional software. Compatible with existing SVT datasets, the Professional series of software allows you to graphically visualise, track and compare test results with ease. Leveraging the power of DSP (Digital Signal Processing), SVT Professional can visually show trends in data by pooling information from test results in spatial, frequency and time domains. SVT Professional has all of the features of the standard software and can unlock a wealth of information contained in your existing SVT database.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/svtfet.png"),
                                linkname: "SVT",
                                link: "https://www.sportsvision.com.au/index.html",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/svt.gif"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/svt.gif"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "80 light Sports Vision Trainer ",
                        cover: require("../../Assets/Products/Psychology/Products/svt80.jpg"),
                        description: "The 80-sensor pad SVT™ is a wall mounted non-portable system, dimensions are 1.25 metres by 1.25 metres and weight is 15 kg.",
                        description2: "After several years or research on how to analyse SVT data and get meaningful information at a single glance, we came up with the SVT Professional software. Compatible with existing SVT datasets, the Professional series of software allows you to graphically visualise, track and compare test results with ease. Leveraging the power of DSP (Digital Signal Processing), SVT Professional can visually show trends in data by pooling information from test results in spatial, frequency and time domains. SVT Professional has all of the features of the standard software and can unlock a wealth of information contained in your existing SVT database.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/svtfet.png"),
                                linkname: "SVT",
                                link: "https://www.sportsvision.com.au/index.html",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/svt.gif"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/svt.gif"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 19,
                subcategory: "NeuroZip",
                // title: "We help people measure and analyze motion",
                // subtitle: "Applications for motion capture technology",
                // subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                // description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/Products/neurozip.jpeg"),
                brand: require("../../Assets/Products/Psychology/neurozip brand.png"),
                backcolor: "#203965",
                Products: [
                    {
                        id: 2,
                        title: "NeuroZip",
                        title2: "Smart Cognitive Rehabilitation Solutions",
                        cover: require("../../Assets/Products/Psychology/Products/neurozip.jpeg"),
                        description: "NeuroZip is your go-to destination for HeadApp smart cognitive rehabilitation, where innovation meets effectiveness. Explore our solution HeadApp for a journey of cognitive enhancement tailored to aid clinicians in patient therapy.",
                        description2: "Preferred Solution for Clinical Professionals Whether you specialize in speech-language pathology, neuropsychology, psychology, or occupational therapy, HeadApp by NeuroZip equips you with a modern digital therapeutic intervention. This versatile software is designed to screen, treat, and monitor neurocognitive, neuropsychiatric, and geriatric brain disorders, providing valuable support in your clinical practice.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/neurozip fet.jpeg"),
                                linkname: "neurozip",
                                link: "https://neurozip.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/neurozip h1.webp"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/neurozip h2.webp"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 25,
                subcategory: "Meditech Electronic GmbH",
                // title: "We help people measure and analyze motion",
                // subtitle: "Applications for motion capture technology",
                // subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                // description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/Products/gmbh.jpeg"),
                brand: require("../../Assets/Products/Psychology/mbp brand.png"),
                backcolor: "#CED5DB",
                Products: [
                    {
                        id: 2,
                        title: "Meditech Electronic GmbH",
                        title2: "Balance - Reliable measuring and training of posture",
                        cover: require("../../Assets/Products/Psychology/Products/gmbh.jpeg"),
                        description: "MediTECH Electronic GmbH is a medical technology company that is constantly working on products and solutions to improve the quality of life of its customers. For this purpose, (further) development and research is carried out in the following areas:",
                        description2: "The MediBalance Pro system allows you to measure and analyse your client's posture and level of balance in a both elegant and sophisticated way your client will appreciate. Within the given test routine, the three primary systems for staying in balance are being evaluated: the vestibular, the visual and the somato-sensorical system are being assessed and compared. Undergoing a 4- or up to 12-step test protocol you / your staff can determine the balance skills of your client. You will see what effect it has to destabilize any one or two of these parameters and if balance can be maintained or deteriorates significantly. Based upon such an initial analysis you can offer a target-oriented training to your client which can help him to regain a better sense of posture and level of body awareness.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/gmbh fet.jpg"),
                                linkname: "meditech",
                                link: "https://www.meditech.de/en_US",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/mbp h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/mbp h2.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 26,
                subcategory: "MediBalancePro",
                // title: "We help people measure and analyze motion",
                // subtitle: "Applications for motion capture technology",
                // subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                // description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/Products/mbp h2.jpg"),
                brand: require("../../Assets/Products/Psychology/mbp brand.png"),
                backcolor: "#A6B8DE",
                Products: [
                    {
                        id: 2,
                        title: "MediBalancePro",
                        title2: "Balance - Reliable measuring and training of posture",
                        cover: require("../../Assets/Products/Psychology/Products/MBP.png"),
                        description: "To be in balance, not worrying about possibly falling - most people never give this much thought and take this ability for granted. But up to 22 percent of male and 36 percent of female population at least sporadically complain about dizziness and vertigo issues. Among the age group 80+ vertigo is impairment number 1 - more than 39 percent of this age group struggle with lack of balance and vertigo issues. Consulting their medical doctor often does not provide the desired solution: Being told that indeed the patient has a vertigo issue most of the time is old news. Aside from easily treated positional vertigo (benign paroxyxmal positional vertigo BPPV) the specific classification which type of vertigo the patient is experiencing is not truly helpful: Primarily patients expect one thing - help, i.e. solutions to deal with and overcome the daily struggle of staying in balance and not falling. This is exactly the aim of our MediBalance Pro platform solution.",
                        description2: "The MediBalance Pro system allows you to measure and analyse your client's posture and level of balance in a both elegant and sophisticated way your client will appreciate. Within the given test routine, the three primary systems for staying in balance are being evaluated: the vestibular, the visual and the somato-sensorical system are being assessed and compared. Undergoing a 4- or up to 12-step test protocol you / your staff can determine the balance skills of your client. You will see what effect it has to destabilize any one or two of these parameters and if balance can be maintained or deteriorates significantly. Based upon such an initial analysis you can offer a target-oriented training to your client which can help him to regain a better sense of posture and level of body awareness.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/mbp fet.jpg"),
                                linkname: "meditech",
                                link: "https://www.meditech.de/en_US",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/mbp h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/mbp h2.jpg"),
                            },
                        ],
                    },
                ]
            },
        ],

    },
    {
        id: 2,
        Category: "Biomechanics",
        cover: require("../../Assets/CategoryPage/Sports Biomechanics.jpg"),
        link: "pukhya/biomechanics",
        subcategories: [
            {
                id: 8,
                subcategory: "Qualysis",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "Our optical tracking technology, also known as optical motion capture, makes it possible to measure the position of very fast moving objects with extremely high accuracy. Indoor, outdoor, ground-to-air or underwater – no matter what condition, we have your solution. The technology consists of motion capture cameras, software and other hardware, designed and produced by our team of experienced engineers.",
                cover: require("../../Assets/Products/Biomechanics/qualisys.jpg"),
                brand: require("../../Assets/Products/Biomechanics/Qualisys-Logo.jpg"),
                backcolor: "#a73b2c",
                Products: [
                    {
                        id: 1,
                        title: "Miqus",
                        title2: "Motion capture cameras for small and large projects",
                        cover: require("../../Assets/Products/miqus.jpg"),
                        description: "The Miqus mocap camera is our smallest and most refined motion capture camera yet. It fits everything you need for your next motion capture project in a small and lightweight camera body.",
                        description2: "Just like all Qualisys mocap cameras, the Miqus cameras are designed to capture accurate mocap data with very low latency. This makes the Miqus suitable for a wide range of applications. From small 3-camera educational systems up to large projects with +100 cameras. With Daisy-chaining and combined Power and Ethernet, setting up a mocap system has never been easier. The new connector means that you only need to connect the mocap cameras with a single cable that carries both data and power. And since you can daisy-chain up to ten Miqus cameras with a single power adapter, it means fewer cables than any other mocap system.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/miqusfet.jpg"),
                                linkname: "Qualisys",
                                link: "https://www.qualisys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Miqus1.webp"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Miqus2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Arqus",
                        title2: "The most Arqurate motion capture camera in the world.",
                        cover: require("../../Assets/Products/arqus.jpg"),
                        description: "The platform provides superior resolution, maxed out frame rates and anything in-between. More importantly, Arqus advanced marker detection algorithms provide exceptional accuracy.",
                        description2: "The Arqus motion capture camera family includes models with protected housing that's specifically built to withstand any type of weather it may encounter. Designed to be natively waterproof and dustproof, and with an extended temperature range, the camera will operate where you need it to.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/Arqus fet.jpg"),
                                linkname: "Qualisys",
                                link: "https://www.qualisys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Arqus1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Arqus2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Miqus Hybrid",
                        title2: "Research on markerless motion capture",
                        cover: require("../../Assets/Products/Biomechanics/Products/miqus-hybrid-hero.jpg"),
                        description: "Future-proof your next motion capture camera investment. With the Miqus Hybrid camera you can do both marker-based and markerless tracking integrated into leading markerless tracking solutions. Perform marker-based tracking and markerless tracking with the same camera system , The Miqus Hybrid camera is a dual-mode camera with a 2MP color sensor, capable of either streaming full HD color video at 85 frames per second or streaming marker data at 340 frames per second. In marker mode, it illuminates passive markers with its infrared strobe, while also being compatible with Qualisys’ active markers.",
                        description2: "Miqus Hybrid is the perfect choice to quickly get started with the things that matter. Together with QTM, the Miqus Hybrid solution takes care of the necessary tasks to get a multi-camera markerless research project quickly off the ground as well as providing the ground truth marker-based data for validation of the markerless algorithms. Use Miqus Hybrid in marker mode to perform marker-based motion capture just like with any other marker camera. Measurement range in bright sunlight will be shorter compared to a normal Miqus camera, but in all other conditions, it will perform equal to Miqus M3. Use Miqus Hybrid in video mode to record video in the same way as with Miqus Video",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/Miqus_hybrid fet.png"),
                                linkname: "Qualisys",
                                link: "https://www.qualisys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Miqus1.webp"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Miqus2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: "Miqus Video ",
                        title2: "Unmatched quality and resolution.",
                        cover: require("../../Assets/Products/Biomechanics/Products/miqus-video-hero-5914-1600x547.jpg"),
                        description: "Miqus Video Plus is a native video camera for use with your Qualisys motion capture camera system offering high-speed performance, superior quality, and unrivaled resolution in capturing movement. It streams synchronized video and gives you perfectly aligned reference video to complement your movement data. The Miqus Video Plus sets a new benchmark for video speed, delivering 40% faster capture rates than its predecessor. With an advanced parallel on-board MJPEG encoder, the camera streams synchronized, high-quality video at rapid speeds, reaching Full HD 1080p at 120 frames per second (fps) and 720p at 480 fps, ensuring no detail is missed.",
                        description2: "Equipped with the latest image sensor technology, the Miqus Video Plus delivers exceptional image quality even under low-light conditions. It boasts a 30% higher resolution than standard Full HD cameras, providing full resolution at 2.8 megapixels (MP), for crystal-clear clarity with every captured motion. The Miqus Video Plus excels in both markerless and marker-based captures, offering precise time synchronization and multi-camera support for thorough coverage. Integrated calibration and direct streaming of compressed video allow for instantaneous skeleton processing, significantly streamlining the workflow for professionals and researchers.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/miqus-video fet.jpg"),
                                linkname: "Qualisys",
                                link: "https://www.qualisys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Arqus1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Arqus2.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 9,
                subcategory: "Delsys",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Biomechanics/Delsys-banner.png"),
                brand: require("../../Assets/Products/Biomechanics/Delsyslogo.png"),
                backcolor: "#0a0a0a",
                Products: [
                    {
                        id: 1,
                        title: "4-channel EMG & IMU Sensor ",
                        title2: "4-channel EMG & IMU Sensor ",
                        cover: require("../../Assets/Products/Biomechanics/Products/4-channel EMG & IMU Sensor.png"),
                        description: "4-channel EMG & IMU Sensor",
                        description2: "4-channel EMG & IMU Sensor",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/4-channel EMG fet.png"),
                                linkname: "Delsys",
                                link: "https://delsys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Biomechanics/Products/4-channel h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Biomechanics/Products/4-channel h2.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 10,
                subcategory: "Bertec",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "The Swedish motion capture company.",
                cover: require("../../Assets/Products/Biomechanics/bertec.webp"),
                brand: require("../../Assets/Products/Biomechanics/berteclogo.png"),
                backcolor: "grey",
                Products: [
                    {
                        id: 1,
                        title: "Bertec Force Plate",
                        title2: "Fixed Walkway Solution",
                        cover: require("../../Assets/Products/Biomechanics/Products/force-plate.jpg"),
                        description: "Bertec force plates are designed for gait, balance, and performance analyses. Our patented strain gauge technology, innovative transducer designs, and quality manufacturing help you capture the highly accurate data needed for your research. Bertec force plates lead the industry in center of pressure and force measurement accuracy with negligible crosstalk, drift, and signal interference. Analog signals sampled internally at 1000Hz are immediately processed by our custom electronics into digital data impervious to degradation. Take your lab to them. Bertec's line of portable force plates allow for accurate and reliable data collection in more natural environments. Representing a legacy of excellence in biomechanics for over 30 years, Bertec is proud to offer the strongest 7-year warranty on fixed force plates.",
                        description2: "The Bertec Fixed Walkway allows researchers to mount Bertec’s 40x60 cm or 60x90 cm fixed force plates in a customizable in-series configuration for various biomechanics applications. Independently reconfigure your force plates depending on your experimental needs while maintaining data quality.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/force-platefet.jpg"),
                                linkname: "Bertec",
                                link: "https://www.bertec.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Biomechanics/Products/forceplateh1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Biomechanics/Products/forceplateh2.webp"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Instrumented Treadmill",
                        title2: "Precision controls",
                        cover: require("../../Assets/Products/Biomechanics/Products/trademill.jpg"),
                        description: "The Bertec Fully Instrumented Treadmill allows researchers to reduce gait laboratory space requirements and remove the limitations inherent in a traditional gait walkway. The unique design results in superior dynamic characteristics and a high natural frequency making it the most trusted research-grade fully instrumented treadmill available on the market.  Bertec treadmills offer high quality data at precision-controlled speeds and accelerations. The system’s high natural frequency, low vibration drive system, and Bertec’s custom electronics enable independent and highly accurate 6-component load measurements output at 1000 Hz from each belt. Meticulously designed, the Bertec Fully Instrumented Treadmill is a split belt system with each side controlled independently (or synced) in both forward and reverse directions. With optional instrumented handrails and incline systems, you can expand your studies to collect more scenarios including upper and lower body forces up to 15 degrees.",
                        description2: "Full-featured software not only enables precise velocity and acceleration control of each treadmill belt, individually or simultaneously, but also provides a space for triggered data capture with your lab equipment. The live view of force and center of pressure data, and step counting with customizable force thresholds allows researchers to visualize and verify outputs. Create custom treadmill protocols to operate your device with unique playlist-style functionality. Offers repeatability for experiments by saving protocols and highlighting your favorite playlists. Sync your data capture with your custom protocol for one-click operation during experiments. Works with all major motion capture systems. Hardware sync allows your treadmill to integrate seamlessly into your lab. Triggered data capture enables external sources to start and stop your data collection. Remote control enables advanced programmatic control of your treadmill via a Python API.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/trademill fet.jpg"),
                                linkname: "Bertec",
                                link: "https://www.bertec.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Biomechanics/Products/trademill h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Biomechanics/Products/trademill h2.webp"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Computerized Dynamic Posturography",
                        title2: "Training with immersive, virtual stimuli",
                        cover: require("../../Assets/Products/Biomechanics/Products/Posturography.jpg"),
                        description: "Bertec’s Computerized Dynamic Posturography (CDP/IVR) combines immersive virtual environments with dual-balance force plate technology. The advancements in Bertec’s technology increase the clinical value of CDP in both assessment and targeted therapy interventions, especially for patients suffering from dizziness, balance problems and/or motion sensitivity. Training with immersive, virtual stimuli can increase patient motivation, adaptability and variability—all factors that positively affect patient outcomes. Bertec’s extensive biomechanical engineering experience enables a technologically superior and clinically robust computerized dynamic posturography system. The use of immersive virtual reality unlocks endless training and visual assessment scenarios previously unavailable to clinicians and simply impossible with a mechanical surround.",
                        description2: "Increase patient adaptability, variability, and motivation with immersive and modular experiences for patients at any level of treatment and recovery. Working side-by-side with your patient, create compelling visual conflict using a library of stimuli that allow real-time modification of difficulty parameters. The CDP/IVR’s low step-up profile provides easy access for your patients suffering from dizziness, balance problems, and/or motion sensitivity; its dynamic motion base intelligently hides its hinges to avoid physical and psychological trip hazards. Stay close and hands-on with your patient using the dedicated static clinician area and wireless remote.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/Posturography fet.jpg"),
                                linkname: "Bertec",
                                link: "https://www.bertec.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Biomechanics/Products/Posturography h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Biomechanics/Products/Posturography h2.jpg"),
                            },
                        ],
                    },
                ]
            },

        ],
    },
    {
        id: 4,
        Category: "Physiology",
        cover: require("../../Assets/CategoryPage/Exercise & Sports Physiology.jpg"),
        link: "pukhya/physiology",
        subcategories: [

            {
                id: 11,
                subcategory: "Moxy Monitor",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Physiology/moxymonitor.jpg"),
                brand: require("../../Assets/Products/Physiology/moxy-logo.webp"),
                backcolor: "#AEAAA0",
                Products: [
                    {
                        id: 1,
                        title: "MOXY  ",
                        title2: "Moxy Sensor Bundles  ",
                        cover: require("../../Assets/Products/Physiology/Products/Moxymonitor.png"),
                        description: "At Moxy Monitor, we know that you want to pursue human excellence. In order to do that, you need to get faster. The problem is you are struggling to control your intensity which makes you feel defeated and stuck in your current training regimen. We believe in an honest way to improve your performance and understand that you expect the time and money you invest in a product to produce great results. World Champion athletes, Olympians, and trainers are using Moxy Monitor because they can’t afford to waste time and effort in their training, and neither should you!",
                        description2: "Intended for athletes that are using Moxy as a daily training guide or for researchers that want to monitor a single site. Intended for training centers that are using Moxy for assessments and for researchers that want to monitor multiple sites.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Physiology/Products/Moxymonitorfet.webp"),
                                linkname: "Moxy Monitor",
                                link: "https://www.moxymonitor.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Physiology/Products/Moxymonitor h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Physiology/Products/Moxymonitor h2.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 12,
                subcategory: "MES",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "The Swedish motion capture company.",
                cover: require("../../Assets/Products/Physiology/mes.jpg"),
                brand: require("../../Assets/Products/Physiology/meslogo.gif"),
                backcolor: "#5fc1d2",
                Products: [
                    {
                        id: 1,
                        title: "VO2max Tracker ergo spirometer (lung test) ",
                        title2: "Air tubes eliminated thanks to headpiece digitizing",
                        cover: require("../../Assets/Products/Physiology/Products/mes vo2max.jpg"),
                        description: "This system may also be used in laboratories where load my be set on connected treadmill or cycle-ergometer. Ergospirometer exceeds the accuracy standards of both the American Thoracic Society and the European Respiratory Society Air tubes eliminated thanks to headpiece digitizing We have brought to effect the main change of flow transforming in our devices. We developed and registrated in Patent’s Office our new invention which enable to eliminate air tubes and a flow signal from our pneumotachpgraph MES DV 40 is changed to a digital form next to pneumotachograph and send by cable to a main unit.",
                        description2: "We have brought to effect the main change of flow transforming in our devices. We developed and registrated in Patent’s Office our new invention which enable to eliminate air tubes and a flow signal from our pneumotachpgraph MES DV 40 is changed to a digital form next to pneumotachograph and send by cable to a main unit. We can say that we produce digital pneumotachograph now.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Physiology/Products/vo2fet.webp"),
                                linkname: "MES",
                                link: "https://www.medicalexpo.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Physiology/Products/vo2h1.webp"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Ergo spirometer VO2max Finder ",
                        title2: "discipline requiring metabolic assessment:  ",
                        cover: require("../../Assets/Products/Physiology/Products/vo2maxfinder.webp"),
                        description: "Ergospirometer exceeds the accuracy standards of both the American Thoracic Society and the European Respiratory Society and includes features for any discipline requiring metabolic assessment: ",
                        description2: "-Cardiopulmonary Exercise Testing Lab -Pulmonology -Exercise Physiology -Sports Medicine -Cardiac Rehabilitation -Occupational Medicine -Intensive Care -Nutrition assessment",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Physiology/Products/vo2fet.webp"),
                                linkname: "MES",
                                link: "https://www.medicalexpo.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Physiology/Products/vo2h1.webp"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Biomodule technology with Omnisence Software ",
                        cover: "https://www.eyemotion.in/wp-content/uploads/2021/02/banner3-1.jpg",
                        description: "On the field or at home. In season or in the off season. The OmniSense™ 5.1 cloud-based software enables end-to-end physiological and biomechanical load monitoring and analysis — before, during, and after activities. Safely scale athlete loads to help enhance performance and prevent injury with ACWR planning tools. Capture raw data then turn it into insightful, easy-to-understand graphs and reports in real-time. You’re empowered with the right information, right away, anywhere. So you can make the right performance management decisions now.",
                        description2: "Plan, monitor, and analyze performance in real-time — anytime, anywhere Design and assign customized periodized training plans crafted to suit your performance goals Set safety thresholds for heart rate, core body temperature, and load parameters Reduce pre-season stress-related injuries through remote athlete management via the OmniSense™ mobile app Create an accurate, comprehensive picture of fitness and fatigue Program safe, effective workouts using ACWR training principles Benchmark, track, and adjust performance goals based on ACWR guidelines using the periodization plan report Login and view data from anywhere ",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Physiology/Products/Omnisence fet.jpg"),
                                linkname: "MES",
                                link: "https://www.medicalexpo.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Physiology/Products/Omnisence h1.jpg"),
                            },
                        ],
                    },
                ]
            },

        ],
    },
    {
        id: 5,
        Category: "Ergonomics",
        cover: require("../../Assets/CategoryPage/Exercise & Sports Physiology.jpg"),
        link: "pukhya/ergonomics",
        subcategories: [
            {
                id: 6,
                subcategory: "Ergoneers",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/ergoneers.jpg"),
                brand: require("../../Assets/Products/Psychology/Ergoneerslogo.png"),
                backcolor: "#b57347",
                Products: [
                    {
                        id: 1,
                        title: "Dikablis Eyetracker Dlab ",
                        cover: require("../../Assets/Products/Psychology/Products/eye_tracking_dlab.jpg"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/eye_tracking_dlab fet.jpg"),
                                linkname: "Ergoneers",
                                link: "https://ergoneers.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/eye_tracking_dlab h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/eye_tracking_dlab h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Prophea X",
                        title2: "Our bundles – specific as your requirements",
                        cover: require("../../Assets/Products/Psychology/Products/prophea x.jpg"),
                        description: "Introducing Prophea.X, the most versatile software ecosphere for holistic, human-centered situation analysis.",
                        description2: "As distinct as every aspect of human insights, so diverse are their respective data tools. But what if that was a rule of the past? From the development and improvement of new products and technologies over human performance analysis and neuroscience up to research-based legislative decisions, human-centred data is the new central power source: Delivered by Prophea.X in one single platform. Discover the future spheres of unlimited flexibility and speed with Prophea.X!",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/Prophea_X_fet.png"),
                                linkname: "Ergoneers",
                                link: "https://ergoneers.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/Prophea_X_h2.png"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/Prophea_X_h1.png"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 14,
                subcategory: "NexGen Ergonomics",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Ergonomics/Products/VATS-montage.jpg"),
                brand: require("../../Assets/Products/Ergonomics/nexgenlogo.png"),
                backcolor: "#00002d",
                Products: [
                    {
                        id: 1,
                        title: "ERGOMASTER ",
                        title2: "VATS™ (Vibration Analysis ToolSet) Software",
                        cover: require("../../Assets/Products/Ergonomics/Products/ergo.jpg"),
                        description: "Mastering ergonomic analysis just became easy with ErgoMaster. ErgoMaster is a suite of attractively priced ergonomic analysis software modules containing a broad range of features and capabilities. The system is easy to use and produces easy to understand reports incorporating pictures or images of the job task being analyzed or redesigned. ErgoMaster enables users with minimal computer expertise to easily utilize the system. The user can customize various reports and analysis. The system also includes detailed on-line help and instructions.",
                        description2: "The system's applications include ergonomic analysis, risk factor identification, training, as well as job and workstation redesign. Its suite of modules and tools assists in the analysis of lifting tasks, repetitive tasks, awkward postures, office ergonomics and many other areas. Modules can be purchased individually.The system allows users to import digital images (*.BMP, *.JPG, *.GIF) or digital images from a video file (*.AVI, *.MPEG, *.WMV). The system includes a database, which enables users to easily save and retrieve their studies including the images.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Ergonomics/Products/ergo fet.jpg"),
                                linkname: "Nexgenergo",
                                link: "http://www.nexgenergo.com/index.html",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Ergonomics/Products/VATS h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "ERGOINTELLIGENCE ",
                        title2: "MMH Modules include:",
                        cover: require("../../Assets/Products/Ergonomics/Products/ergointel.jpg"),
                        description: "The ErgoIntelligence™ MMH (Manual Material Handling) modules focus on material handling applications and provide an in-depth risk analysis for low-back injury using the NIOSH Lifting Equation, Biomechanics, Energy Expenditure, Mital Tables and Snook & Ciriello Tables. All modules include extensive Help and can be purchased individually.",
                        description2: "EI-MMH-N : NIOSH Lifting Equation with multi-task analysis EI-MMH-NPRO : MMH-N with 2D biomechanics and 2D manikin facility EI-MMH-SCM : Snook & Ciriello and Mital Table analysis EI-MMH-SCMPRO : MMH-SCM with biomechanics EI-MMH-EE : Energy Expenditure After assessing a manual material handling task (i.e. lifting, lowering, pulling, pushing, carrying), the programs also indicate numerous generic recommendations to prevent risk of work-related Low Back Injury.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Ergonomics/Products/ergointel fet.jpg"),
                                linkname: "Nexgenergo",
                                link: "http://www.nexgenergo.com/index.html",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Ergonomics/Products/VATS h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "MVTA (Multimedia video task analysis)  ",
                        title2: "VATS™ (Vibration Analysis ToolSet) Software",
                        cover: require("../../Assets/Products/Ergonomics/Products/MVTA.jpg"),
                        description: "Concern for the hazards related to exposure of the human body to vibration from power tools, vehicles and machinery has increased in recent years. Both whole body vibration and hand arm vibration can cause physical damage and considerable increased compensation costs. Various standards have been implemented to address this important hazard area. Our VATS software has been developed to enable organizations to easily analyze vibration data and compare them to the various standards. VATS can import accelerometer data from most instrumentation.",
                        description2: "The file must be a text formatted file and up to two accelerometers of data can be included in the file. The data is separated by commas or spaces. The file format is: X1, Y1, Z1, X2, Y2, Z2. Leading organizations worldwide use VATS. These include vehicle and tool manufacturers, government organizations, universities, corporations and consultants. VATS is available for either hand-arm or whole body analysis. Hand-arm vibration analysis is based on the ISO 5349 and ACGIH standard for hand arm vibration (HAV). Whole body vibration analysis is based on the ISO 2631-1, 2631-5 (2004), 2631-5 (2018), BS 6841, and ACGIH standard for whole body vibration (WBV) and 8 hours exposure.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Ergonomics/Products/MVTA fet.gif"),
                                linkname: "Nexgenergo",
                                link: "http://www.nexgenergo.com/index.html",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Ergonomics/Products/MVTAh1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: "Human Modeling (Anybody modeling system) ",
                        title2: "VATS™ (Vibration Analysis ToolSet) Software",
                        cover: require("../../Assets/Products/Ergonomics/Products/VATS.jpg"),
                        description: "Concern for the hazards related to exposure of the human body to vibration from power tools, vehicles and machinery has increased in recent years. Both whole body vibration and hand arm vibration can cause physical damage and considerable increased compensation costs. Various standards have been implemented to address this important hazard area. Our VATS software has been developed to enable organizations to easily analyze vibration data and compare them to the various standards. VATS can import accelerometer data from most instrumentation.",
                        description2: "The file must be a text formatted file and up to two accelerometers of data can be included in the file. The data is separated by commas or spaces. The file format is: X1, Y1, Z1, X2, Y2, Z2. Leading organizations worldwide use VATS. These include vehicle and tool manufacturers, government organizations, universities, corporations and consultants. VATS is available for either hand-arm or whole body analysis. Hand-arm vibration analysis is based on the ISO 5349 and ACGIH standard for hand arm vibration (HAV). Whole body vibration analysis is based on the ISO 2631-1, 2631-5 (2004), 2631-5 (2018), BS 6841, and ACGIH standard for whole body vibration (WBV) and 8 hours exposure.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Ergonomics/Products/VATS-fet.jpg"),
                                linkname: "Nexgenergo",
                                link: "http://www.nexgenergo.com/index.html",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Ergonomics/Products/VATS h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: "AnyBody AnyGait ",
                        title2: "VATS™ (Vibration Analysis ToolSet) Software",
                        cover: require("../../Assets/Products/Ergonomics/Products/VATS.jpg"),
                        description: "Concern for the hazards related to exposure of the human body to vibration from power tools, vehicles and machinery has increased in recent years. Both whole body vibration and hand arm vibration can cause physical damage and considerable increased compensation costs. Various standards have been implemented to address this important hazard area. Our VATS software has been developed to enable organizations to easily analyze vibration data and compare them to the various standards. VATS can import accelerometer data from most instrumentation.",
                        description2: "The file must be a text formatted file and up to two accelerometers of data can be included in the file. The data is separated by commas or spaces. The file format is: X1, Y1, Z1, X2, Y2, Z2. Leading organizations worldwide use VATS. These include vehicle and tool manufacturers, government organizations, universities, corporations and consultants. VATS is available for either hand-arm or whole body analysis. Hand-arm vibration analysis is based on the ISO 5349 and ACGIH standard for hand arm vibration (HAV). Whole body vibration analysis is based on the ISO 2631-1, 2631-5 (2004), 2631-5 (2018), BS 6841, and ACGIH standard for whole body vibration (WBV) and 8 hours exposure.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Ergonomics/Products/VATS-fet.jpg"),
                                linkname: "Nexgenergo",
                                link: "http://www.nexgenergo.com/index.html",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Ergonomics/Products/VATS h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: "VATS (Vibration analysis toolset) ",
                        title2: "Comprehensive Human Vibration Analysis Solution",
                        cover: require("../../Assets/Products/Ergonomics/Products/VATS.jpg"),
                        description: "Concern for the hazards related to exposure of the human body to vibration from power tools, vehicles and machinery has increased in recent years. Both whole body vibration and hand arm vibration can cause physical damage and considerable increased compensation costs. Various standards have been implemented to address this important hazard area. The VATS series of human vibration analysis products has been developed to enable organizations to easily obtain vibration data and compare them to the various standards. Leading organizations worldwide use VATS. These include vehicle and tool manufacturers, government organizations, universities, corporations and consultants. VATS unique features include the ability to handle multiple accelerometers and other sensors with large amounts of storage that can then be easily analyzed by our powerful yet easy to use software.",
                        description2: "The VATS series of human vibration analysis products are available as individual packages for either hand-arm or whole body analysis. The VATS includes the MWX8 DataLOG that is a fully portable, subject worn, programmable data acquisition unit. The DataLOG collects data from the accelerometers and/or from a variety of additional sensors such as electrogoniometers, force sensors and EMG that is then downloaded to a PC for detailed analysis. DataLOG has a maximum sampling rate of 20,000Hz/channel (160KHz maximum on 8 channels), 2GB flash and telemetry option. Up to 3 DataLOG units can be synchronized for a total of 24 analog channels. The DataLOG is connected to the host PC for both programming and downloading of data. Data for X, Y and Z axes of the accelerometers is simultaneously collected. When recording in MMC Mode only synchronization options for 16 or 24 channels are available with sampling rates up to 20,000Hz per channel (160KHz total Sampling frequency). With the VATS, the user can either perform detailed analysis with full reporting on a local PC or send the data electronically for analysis at a central corporate site. This approach simplifies data collection and incorporates sophisticated analysis with user-friendly software and comprehensive help. Raw data is available for analysis.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Ergonomics/Products/VATS-fet.jpg"),
                                linkname: "Nexgenergo",
                                link: "http://www.nexgenergo.com/index.html",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Ergonomics/Products/VATS-montage.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 8,
                subcategory: "Qualysis",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "Our optical tracking technology, also known as optical motion capture, makes it possible to measure the position of very fast moving objects with extremely high accuracy. Indoor, outdoor, ground-to-air or underwater – no matter what condition, we have your solution. The technology consists of motion capture cameras, software and other hardware, designed and produced by our team of experienced engineers.",
                cover: require("../../Assets/Products/Biomechanics/qualisys.jpg"),
                brand: require("../../Assets/Products/Biomechanics/Qualisys-Logo.jpg"),
                backcolor: "#a73b2c",
                Products: [
                    {
                        id: 1,
                        title: "Miqus",
                        title2: "Motion capture cameras for small and large projects",
                        cover: require("../../Assets/Products/miqus.jpg"),
                        description: "The Miqus mocap camera is our smallest and most refined motion capture camera yet. It fits everything you need for your next motion capture project in a small and lightweight camera body.",
                        description2: "Just like all Qualisys mocap cameras, the Miqus cameras are designed to capture accurate mocap data with very low latency. This makes the Miqus suitable for a wide range of applications. From small 3-camera educational systems up to large projects with +100 cameras. With Daisy-chaining and combined Power and Ethernet, setting up a mocap system has never been easier. The new connector means that you only need to connect the mocap cameras with a single cable that carries both data and power. And since you can daisy-chain up to ten Miqus cameras with a single power adapter, it means fewer cables than any other mocap system.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/miqusfet.jpg"),
                                linkname: "Qualisys",
                                link: "https://www.qualisys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Miqus1.webp"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Miqus2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Arqus",
                        title2: "The most Arqurate motion capture camera in the world.",
                        cover: require("../../Assets/Products/arqus.jpg"),
                        description: "The platform provides superior resolution, maxed out frame rates and anything in-between. More importantly, Arqus advanced marker detection algorithms provide exceptional accuracy.",
                        description2: "The Arqus motion capture camera family includes models with protected housing that's specifically built to withstand any type of weather it may encounter. Designed to be natively waterproof and dustproof, and with an extended temperature range, the camera will operate where you need it to.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/Arqus fet.jpg"),
                                linkname: "Qualisys",
                                link: "https://www.qualisys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Arqus1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Arqus2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Miqus Hybrid",
                        title2: "Research on markerless motion capture",
                        cover: require("../../Assets/Products/Biomechanics/Products/miqus-hybrid-hero.jpg"),
                        description: "Future-proof your next motion capture camera investment. With the Miqus Hybrid camera you can do both marker-based and markerless tracking integrated into leading markerless tracking solutions. Perform marker-based tracking and markerless tracking with the same camera system , The Miqus Hybrid camera is a dual-mode camera with a 2MP color sensor, capable of either streaming full HD color video at 85 frames per second or streaming marker data at 340 frames per second. In marker mode, it illuminates passive markers with its infrared strobe, while also being compatible with Qualisys’ active markers.",
                        description2: "Miqus Hybrid is the perfect choice to quickly get started with the things that matter. Together with QTM, the Miqus Hybrid solution takes care of the necessary tasks to get a multi-camera markerless research project quickly off the ground as well as providing the ground truth marker-based data for validation of the markerless algorithms. Use Miqus Hybrid in marker mode to perform marker-based motion capture just like with any other marker camera. Measurement range in bright sunlight will be shorter compared to a normal Miqus camera, but in all other conditions, it will perform equal to Miqus M3. Use Miqus Hybrid in video mode to record video in the same way as with Miqus Video",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/Miqus_hybrid fet.png"),
                                linkname: "Qualisys",
                                link: "https://www.qualisys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Miqus1.webp"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Miqus2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: "Miqus Video ",
                        title2: "Unmatched quality and resolution.",
                        cover: require("../../Assets/Products/Biomechanics/Products/miqus-video-hero-5914-1600x547.jpg"),
                        description: "Miqus Video Plus is a native video camera for use with your Qualisys motion capture camera system offering high-speed performance, superior quality, and unrivaled resolution in capturing movement. It streams synchronized video and gives you perfectly aligned reference video to complement your movement data. The Miqus Video Plus sets a new benchmark for video speed, delivering 40% faster capture rates than its predecessor. With an advanced parallel on-board MJPEG encoder, the camera streams synchronized, high-quality video at rapid speeds, reaching Full HD 1080p at 120 frames per second (fps) and 720p at 480 fps, ensuring no detail is missed.",
                        description2: "Equipped with the latest image sensor technology, the Miqus Video Plus delivers exceptional image quality even under low-light conditions. It boasts a 30% higher resolution than standard Full HD cameras, providing full resolution at 2.8 megapixels (MP), for crystal-clear clarity with every captured motion. The Miqus Video Plus excels in both markerless and marker-based captures, offering precise time synchronization and multi-camera support for thorough coverage. Integrated calibration and direct streaming of compressed video allow for instantaneous skeleton processing, significantly streamlining the workflow for professionals and researchers.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/miqus-video fet.jpg"),
                                linkname: "Qualisys",
                                link: "https://www.qualisys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Arqus1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Arqus2.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 1,
                subcategory: "Thought Technology",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "Whether you are a psychologist, a physiotherapist, a nurse practitioner or a medical doctor, our powerful and easy to use physiological monitoring and biofeedback systems will meet your needs for quality, flexibility and reliability.",
                cover: require("../../Assets/Products/Psychology/thoughttecm.png"),
                brand: require("../../Assets/Products/Psychology/thoughttec-brand.png"),
                backcolor: "#2E8E91",
                Products: [
                    {
                        id: 1,
                        title: "Biofeedback",
                        title2: "Biofeedback Expert System",
                        cover: require("../../Assets/Products/Psychology/Bio_Expert.jpg"),
                        description: "Get the broadest physiological perspective of your client’s stress and relaxation responses with our most complete physiological monitoring and multimedia biofeedback system. ProComp Infiniti gives you the ability to do classic biofeedback with up to 8 channels of physiology, including skin conductance, peripheral temperature, heart rate variability, respiration rate and muscle tension. The ability to include 1 or 2 channels of neurofeedback and passive infrared (pIR) monitoring of frontal lobe activation makes this package the most versatile of all.",
                        description2: "Our top of the line physiological biofeedback system combines the versatile 8 channel ProComp Infiniti device with a full array of sensors, BioGraph Infiniti and the 360 suite. This complete system, which combines classic physiological biofeedback, HRV training, neurofeedback and passive infrared biofeedback into one set of tools is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological options.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/biofeedbackfet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/biofeedback h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/biofeedback h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Neurofeedback ",
                        title2: "Neurofeedback Expert System",
                        cover: require("../../Assets/Products/Psychology/Neuro_Expert.jpg"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/biofeedbackfet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/biofeedback h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/biofeedback h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Heart Rate Variability",
                        title2: "Heart rate variability biofeedback is a powerful method for exercising your client’s cardiovascular system.",
                        cover: require("../../Assets/Products/Psychology/HRV_Suite.jpg"),
                        description: "Teaching your clients to practice slow regular breathing exercises as often as possible, 10 to 20 minutes a day, will help them learn important self-regulation skills and maintain higher levels of heart rate variability. Assess and document your client’s baseline HRV levels by running the 3 step HRV assessment.Teach your clients awareness and control of breathing patterns and how breathing influences heart rate.Train your clients to use breath control to entrain deep and effective relaxation.",
                        description2: "The HRV Suite works with the ProComp 2, ProComp 5, and ProComp Infiniti, a medical grade physiological monitoring device, with easy-to-fasten finger pulse and respiration sensors to provide direct measures of heart rate and breathing. Prerequisites HRV suite alone can only be purchased by existing users who own : ProComp 2, ProComp 5, and ProComp Infiniti with BioGraph 6.1 or later HR/BVP sensor Respiration sensor Or for customers who want to add the suite to their newly purchased ProComp 2, ProComp 5, and ProComp Infiniti system with EEG or Physiology suite.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/HRV_Suite fet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/HRV_Suite h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/HRV_Suite h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: "Peak Performance",
                        cover: require("../../Assets/Products/Psychology/PeakPerformance.jpg"),
                        description: "The pinnacle of our Peak Performance packages is the expert package. Built for the advanced biofeedback practitioner, get a full lineup of software and hardware to fully train your athlete’s psychophysiology, and have the opportunity to completely bridge the gap between mind and body for true peak performance. This package is designed to help your athletes learn to make better decisions, increase their consistency, and make the micro adjustments necessary to look out from the top of the podium instead of watch from the locker room.",
                        description2: "The pinnacle of our Peak Performance packages is the expert package. Built for the advanced biofeedback practitioner, get a full lineup of software and hardware to fully train your athlete’s psychophysiology, and have the opportunity to completely bridge the gap between mind and body for true peak performance. This package is designed to help your athletes learn to make better decisions, increase their consistency, and make the micro adjustments necessary to look out from the top of the podium instead of watch from the locker room.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/Peak Performance fet.png"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/Peak Performance h1.png"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/Peak Performance h2.png"),
                            },
                        ],
                    },
                    {
                        id: 6,
                        title: "Neuro balance system",
                        cover: require("../../Assets/Products/Psychology/Products/Neuro balance system.jpg"),
                        description: "To be in balance, not worrying about possibly falling - most people never give this much thought and take this ability for granted. But up to 22 percent of male and 36 percent of female population at least sporadically complain about dizziness and vertigo issues. Among the age group 80+ vertigo is impairment number 1 - more than 39 percent of this age group struggle with lack of balance and vertigo issues. Consulting their medical doctor often does not provide the desired solution: Being told that indeed the patient has a vertigo issue most of the time is old news. Aside from easily treated positional vertigo (benign paroxyxmal positional vertigo BPPV) the specific classification which type of vertigo the patient is experiencing is not truly helpful: Primarily patients expect one thing - help, i.e. solutions to deal with and overcome the daily struggle of staying in balance and not falling. This is exactly the aim of our MediBalance Pro platform solution.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools. Based upon such an initial analysis you can offer a target-oriented training to your client which can help him to regain a better sense of posture and level of body awareness.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/Neuro balance system fet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/Neuro balance system h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/Neuro balance system h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: "Body and mind relaxation system",
                        cover: require("../../Assets/Products/Psychology/Products/bodyandmindrealaxsys.jpg"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Psychology/Products/bodyandmindrealaxsys fet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Psychology/Products/bodyandmindrealaxsys h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Psychology/Products/bodyandmindrealaxsys h2.jpg"),
                            },
                        ],
                    },

                ]
            },
            {
                id: 9,
                subcategory: "Delsys",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Biomechanics/Delsys-banner.png"),
                brand: require("../../Assets/Products/Biomechanics/Delsyslogo.png"),
                backcolor: "#0a0a0a",
                Products: [
                    {
                        id: 1,
                        title: "4-channel EMG & IMU Sensor ",
                        title2: "4-channel EMG & IMU Sensor ",
                        cover: require("../../Assets/Products/Biomechanics/Products/4-channel EMG & IMU Sensor.png"),
                        description: "4-channel EMG & IMU Sensor",
                        description2: "4-channel EMG & IMU Sensor",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/4-channel EMG fet.png"),
                                linkname: "Delsys",
                                link: "https://delsys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Biomechanics/Products/4-channel h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Biomechanics/Products/4-channel h2.jpg"),
                            },
                        ],
                    },
                ]
            },

        ],
    },
    {
        id: 6,
        Category: "Sports Science",
        cover: require("../../Assets/CategoryPage/Exercise & Sports Physiology.jpg"),
        link: "pukhya/sports-science",
        subcategories: [
            {
                id: 10,
                subcategory: "Bertec",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "The Swedish motion capture company.",
                cover: require("../../Assets/Products/Biomechanics/bertec.webp"),
                brand: require("../../Assets/Products/Biomechanics/berteclogo.png"),
                backcolor: "grey",
                Products: [
                    {
                        id: 1,
                        title: "Bertec Force Plate",
                        title2: "Fixed Walkway Solution",
                        cover: require("../../Assets/Products/Biomechanics/Products/force-plate.jpg"),
                        description: "Bertec force plates are designed for gait, balance, and performance analyses. Our patented strain gauge technology, innovative transducer designs, and quality manufacturing help you capture the highly accurate data needed for your research. Bertec force plates lead the industry in center of pressure and force measurement accuracy with negligible crosstalk, drift, and signal interference. Analog signals sampled internally at 1000Hz are immediately processed by our custom electronics into digital data impervious to degradation. Take your lab to them. Bertec's line of portable force plates allow for accurate and reliable data collection in more natural environments. Representing a legacy of excellence in biomechanics for over 30 years, Bertec is proud to offer the strongest 7-year warranty on fixed force plates.",
                        description2: "The Bertec Fixed Walkway allows researchers to mount Bertec’s 40x60 cm or 60x90 cm fixed force plates in a customizable in-series configuration for various biomechanics applications. Independently reconfigure your force plates depending on your experimental needs while maintaining data quality.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/force-platefet.jpg"),
                                linkname: "Bertec",
                                link: "https://www.bertec.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Biomechanics/Products/forceplateh1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Instrumented Treadmill",
                        title2: "Precision controls",
                        cover: require("../../Assets/Products/Biomechanics/Products/trademill.jpg"),
                        description: "The Bertec Fully Instrumented Treadmill allows researchers to reduce gait laboratory space requirements and remove the limitations inherent in a traditional gait walkway. The unique design results in superior dynamic characteristics and a high natural frequency making it the most trusted research-grade fully instrumented treadmill available on the market.  Bertec treadmills offer high quality data at precision-controlled speeds and accelerations. The system’s high natural frequency, low vibration drive system, and Bertec’s custom electronics enable independent and highly accurate 6-component load measurements output at 1000 Hz from each belt. Meticulously designed, the Bertec Fully Instrumented Treadmill is a split belt system with each side controlled independently (or synced) in both forward and reverse directions. With optional instrumented handrails and incline systems, you can expand your studies to collect more scenarios including upper and lower body forces up to 15 degrees.",
                        description2: "Full-featured software not only enables precise velocity and acceleration control of each treadmill belt, individually or simultaneously, but also provides a space for triggered data capture with your lab equipment. The live view of force and center of pressure data, and step counting with customizable force thresholds allows researchers to visualize and verify outputs. Create custom treadmill protocols to operate your device with unique playlist-style functionality. Offers repeatability for experiments by saving protocols and highlighting your favorite playlists. Sync your data capture with your custom protocol for one-click operation during experiments. Works with all major motion capture systems. Hardware sync allows your treadmill to integrate seamlessly into your lab. Triggered data capture enables external sources to start and stop your data collection. Remote control enables advanced programmatic control of your treadmill via a Python API.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/trademill fet.jpg"),
                                linkname: "Bertec",
                                link: "https://www.bertec.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Biomechanics/Products/trademill h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Computerized Dynamic Posturography",
                        title2: "Training with immersive, virtual stimuli",
                        cover: require("../../Assets/Products/Biomechanics/Products/Posturography.jpg"),
                        description: "Bertec’s Computerized Dynamic Posturography (CDP/IVR) combines immersive virtual environments with dual-balance force plate technology. The advancements in Bertec’s technology increase the clinical value of CDP in both assessment and targeted therapy interventions, especially for patients suffering from dizziness, balance problems and/or motion sensitivity. Training with immersive, virtual stimuli can increase patient motivation, adaptability and variability—all factors that positively affect patient outcomes. Bertec’s extensive biomechanical engineering experience enables a technologically superior and clinically robust computerized dynamic posturography system. The use of immersive virtual reality unlocks endless training and visual assessment scenarios previously unavailable to clinicians and simply impossible with a mechanical surround.",
                        description2: "Increase patient adaptability, variability, and motivation with immersive and modular experiences for patients at any level of treatment and recovery. Working side-by-side with your patient, create compelling visual conflict using a library of stimuli that allow real-time modification of difficulty parameters. The CDP/IVR’s low step-up profile provides easy access for your patients suffering from dizziness, balance problems, and/or motion sensitivity; its dynamic motion base intelligently hides its hinges to avoid physical and psychological trip hazards. Stay close and hands-on with your patient using the dedicated static clinician area and wireless remote.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/Posturography fet.jpg"),
                                linkname: "Bertec",
                                link: "https://www.bertec.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Biomechanics/Products/Posturography h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 16,
                subcategory: "Catapult",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/SportsScience/catapult.jpg"),
                brand: require("../../Assets/Products/SportsScience/catapult-logo.jpeg"),
                backcolor: "#00002d",
                Products: [
                    {
                        id: 1,
                        title: "Catapult Vector S7 ",
                        cover: require("../../Assets/Products/SportsScience/Products/catapult-S7-w-Vest.webp"),
                        description: "We believe that our users are the best source of information and new ideas. We make sure we stay close to the action to ensure our solutions are up to date with both the latest technology, and the most relevant information for our users.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/catapult fet.webp"),
                                linkname: "Catapult",
                                link: "https://www.catapult.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/catapult h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/SportsScience/Products/catapult h2.jpeg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 17,
                subcategory: "Hawkins Dynmics",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "The Swedish motion capture company.",
                cover: require("../../Assets/Products/SportsScience/Hawkins Dynmics.webp"),
                brand: require("../../Assets/Products/SportsScience/Hawkinslogo.png"),
                backcolor: "#b66c6c",
                Products: [
                    {
                        id: 1,
                        title: "Portable force plate and isometric rack ",
                        cover: require("../../Assets/Products/SportsScience/Products/plates.webp"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/plates fet.jpg"),
                                linkname: "hawkindynamics",
                                link: "https://www.hawkindynamics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/plates h1.webp"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/SportsScience/Products/plates h2.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 18,
                subcategory: "Sports vision training",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Psychology/svt.gif"),
                brand: require("../../Assets/Products/Psychology/svtlogo.png"),
                backcolor: "#6393be",
                Products: [
                    {
                        id: 1,
                        title: "32 light Sports Vision Trainer ",
                        cover: require("../../Assets/Products/Psychology/Products/svt32.jpg"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/biofeedbackfet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "64 light Sports Vision Trainer ",
                        cover: require("../../Assets/Products/Psychology/Products/svt32.jpg"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/biofeedbackfet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "80 light Sports Vision Trainer ",
                        cover: require("../../Assets/Products/Psychology/Products/svt80.jpg"),
                        description: "Get the most out of your neurofeedback protocols by adding peripheral physiological measures. The ProComp Infiniti system is our most versatile encoder device and includes a set of classic biofeedback sensors with 2 EEG sensors and a pIR HEG headset. This allows any user to combine EEG or HEG with physiology or heart rate variability (HRV) when assessing or doing self-regulation training.",
                        description2: "Our top of the line neurofeedback system includes the versatile 8 channel ProComp Infiniti device with 2 EEG sensors, pIR HEG and key physiological sensors, including skin conductance, peripheral temperature, muscle tension, heart rate (from finger pulse or EKG), and respiration. With BioGraph Infiniti and the 360 suite, you can incorporate classical biofeedback or heart rate variability training to your neurofeedback protocols to get the broadest physiological perspective on the market. This complete system is the wise choice for universities, hospitals and private clinics who want to have the widest selection of psychophysiological tools.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/biofeedbackfet.jpg"),
                                linkname: "Thought tec",
                                link: "https://thoughttechnology.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 19,
                subcategory: "Fast Twitch ISTE",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "Our optical tracking technology, also known as optical motion capture, makes it possible to measure the position of very fast moving objects with extremely high accuracy. Indoor, outdoor, ground-to-air or underwater – no matter what condition, we have your solution. ",
                cover: require("../../Assets/Products/SportsScience/fft.jpg"),
                brand: require("../../Assets/Products/SportsScience/FTT-Logo.png"),
                backcolor: "#6C584A",
                Products: [
                    {
                        id: 1,
                        title: "Isokinetic MED ",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/med.jpg"),
                        description: "The  multi joint Iso-Med machine provides Rehabilitation professionals with an ideal Isokinetic testing and monitoring apparatus. It both regenerates injured muscle tissue and improves performance. For platform exercises, includes; Hip – all movements. Shoulder – all movements. Elbow – Flexion/Extension. Trunk – Flexion/Extension. Ankle/Wrist – Optional.",
                        description2: "Width  3.0m.  Length 3.0m Height 2.1m. Weight 300kg This multi joint machine is for unilateral knee function with Range Limiter device. Right motor moves 180 degrees. For platform exercises, includes the following machines: Hip – all movements. Shoulder – all movements. Elbow – Flexion/Extension. Trunk – Flexion/Extension. Ankle/Wrist – Optional.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/med fet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/med h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/SportsScience/Products/med h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Isokinetic KNEE",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/knee.jpg"),
                        description: "This High Speed Isokinetic Knee machine is the ultimate speed leg extension/flexion machine. Isolate the knee and fire the quadriceps and hamstrings. Perfect for rehabilitation, sports performance and training at speeds that are simply not achievable on other forms of training. Imagine being able to fire the nervous system against resistance at the same speeds you play sports.",
                        description2: "Width 1.2m Length 1.3m Height 1.4m Weight 150kg This High Speed Isokinetic Knee machine is the ultimate speed leg extension/flexion machine. Isolate the knee and fire the quadriceps and hamstrings. Perfect for rehabilitation, sports performance and training at speeds that are simply not achievable on other forms of training. Imagine being able to fire the nervous system against resistance at the same speeds you play sports. Suitable for Isometric/ Isokinetic speeds from 2 degrees/ second to 600 degrees/second. Displays unilateral results for both limbs simultaneously.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/knee.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 2,
                                cover: require("../../Assets/Products/SportsScience/Products/knee h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Isokinetic Squat ",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/SQUAt.jpg"),
                        description: "The Squat machine is the flagship Isokinetic machine. The importance of squats in athletic performance is well documented. Now you can achieve more power, more speed and more strength safer and faster than any other form of squatting. Imagine being able to fire the nervous system and achieve triple extension against resistance and use data reporting to show improvements over time.",
                        description2: "Width 1.2m Length 2.2m Height 1.6m Weight 200 kg The Squat machine is the flagship Isokinetic machine. The importance of squats in athletic performance is well documented. Now you can achieve more power, more speed and more strength safer and faster than any other form of squatting. Imagine being able to fire the nervous system and achieve triple extension against resistance and use data reporting to show improvements over time.  Select two-way resistance settings to neurologically activate Flexion and Extension contractions. Perfect for rehabilitation, sports performance and training at speeds that are simply not achievable on other forms of training.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/squat ft.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/squat h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/SportsScience/Products/squat h2.jpeg"),
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: "Isokinetic HIP",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/hip.jpg"),
                        description: "The Hip machine is ideal for increasing running speed. It is capable of achieving in excess of 600 – 800 degrees per second in the running flexion/extension position. Replicates high knee lift component of expolsive movements Instantaneously switching resistance between glute and hip flexor, to engage high speed muscle contraction for speed/power development. ",
                        description2: "Length 1.5m Width 1.2m Height 1.4m Weight 150kg The Hip machine is one of the most robust machines on the market. It is capable of achieving in excess of 600 – 800 degrees per second in the running flexion/extension position. Ideal for increasing running speed Glute, hip flexor activation is the ideal way to safely move at these speeds under resistance. Instantaneously switching resistance between glute and hip flexor, to engage high speed muscle contraction for speed/power development. Imagine being able to fire the nervous system against resistance in the running mechanical position at the same speeds you play sports. ",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/hip fet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/hip h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: "Isokinetic JUMP SQUAT",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/JUMP-Squat.jpg"),
                        description: "This is a simpler form of technology incorporating the same features of the Squat machine. You will still achieve triple extension against resistance (1 to 8 in the resistance scale). It doesn’t have a full computerised function instead a digital LED mini computer counting repetitions, time and calories. Performs dual concentric and concentric/eccentric.",
                        description2: "Width 1.2m Length 2.2m Height 1.6m Weight 200 kg This is a simpler form of technology incorporating the same features of the Squat machine. You will still achieve triple extension against resistance (1 to 8 in the resistance scale). It doesn’t have a full computerised function instead a digital LED mini computer counting repetitions, time and calories. Performs dual concentric and concentric/eccentric.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/biofeedbackfet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 27,
                subcategory: "Punch Sensor",
                // title: "We help people measure and analyze motion",
                // subtitle: "Applications for motion capture technology",
                // subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                // description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/SportsScience/Products/punchsensor-image-banner.png"),
                brand: require("../../Assets/Products/SportsScience/Products/punchsensor brand.png"),
                backcolor: "#010000",
                Products: [
                    {
                        id: 2,
                        title: "Punch Sensor",
                        title2: "Lower Body Negative Pressure",
                        cover: require("../../Assets/Products/SportsScience/Products/punchsensor-image2.png"),
                        description: "The heart of the kit is the digital force sensor built into the punching or kicking pad. It measures forces at 1000 times a second and detects peak forces applied over the 15' x 20' padded surface.",
                        description2: "The PunchSensor communicates with our software running on Windows PC or Tablet. The software continuously measures the forces exerted by a kick or a punch, detects and computes the peak force and the number of punches in a given time duration. This data is then displayed in real-time as well as saved to a file for further analysis. The software detects and displays the peak force of each impact during a round. Users can save results from a session and compare it with data from earlier saved sessions to see progress and compare the effectiveness of different techniques.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/punchsensor-image1.jpg"),
                                linkname: "punchsensor",
                                link: "https://www.punchsensor.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/punchsensor-image-banner.png"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/SportsScience/Products/punchsensor-image3.png"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 28,
                subcategory: "LBNP (Lower Body Negative Presssure)",
                // title: "We help people measure and analyze motion",
                // subtitle: "Applications for motion capture technology",
                // subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                // description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/SportsScience/Products/LBNP-Bodystyler_image.png"),
                brand: require("../../Assets/Products/Psychology/mbp brand.png"),
                backcolor: "#A6B8DE",
                Products: [
                    {
                        id: 2,
                        title: "LBNP (Lower Body Negative Presssure)",
                        title2: "Lower Body Negative Pressure",
                        cover: require("../../Assets/Products/SportsScience/Products/LBNP-Bodystyler_image.png"),
                        description: "This review presents lower body negative pressure (LBNP) as a unique tool to investigate the physiology of integrated systemic compensatory responses to altered hemodynamic patterns during conditions of central hypovolemia in humans. An early review published in Physiological Reviews over 40 yr ago (Wolthuis et al. Physiol Rev 54: 566-595, 1974) focused on the use of LBNP as a tool to study effects of central hypovolemia, while more than a decade ago a review appeared that focused on LBNP as a model of hemorrhagic shock (Cooke et al. J Appl Physiol (1985) 96: 1249-1261, 2004). Since then there has been a great deal of new research that has applied LBNP to investigate complex physiological responses to a variety of challenges including orthostasis, hemorrhage, and other important stressors seen in humans such as microgravity encountered during spaceflight.",
                        description2: "The LBNP stimulus has provided novel insights into the physiology underlying areas such as intolerance to reduced central blood volume, sex differences concerning blood pressure regulation, autonomic dysfunctions, adaptations to exercise training, and effects of space flight. Furthermore, approaching cardiovascular assessment using prediction models for orthostatic capacity in healthy populations, derived from LBNP tolerance protocols, has provided important insights into the mechanisms of orthostatic hypotension and central hypovolemia, especially in some patient populations as well as in healthy subjects. This review also presents a concise discussion of mathematical modeling regarding compensatory responses induced by LBNP. Given the diverse applications of LBNP, it is to be expected that new and innovative applications of LBNP will be developed to explore the complex physiological mechanisms that underline health and disease.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/LBNP-Bodystyler_image.png"),
                                linkname: "goodpl",
                                link: "https://www.goodpl.kr",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/LBNP-Bodystyler_image.png"),
                            },
                        ],
                    },
                ]
            },

        ],
    },
    {
        id: 3,
        Category: "Strength and conditioning",
        cover: require("../../Assets/CategoryPage/Sports Strength.webp"),
        link: "pukhya/strength-and-conditioning",
        subcategories: [
            {
                id: 21,
                subcategory: "Medilogics Germany",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "Our optical tracking technology, also known as optical motion capture, makes it possible to measure the position of very fast moving objects with extremely high accuracy. Indoor, outdoor, ground-to-air or underwater – no matter what condition, we have your solution. The technology consists of motion capture cameras, software and other hardware, designed and produced by our team of experienced engineers.",
                cover: require("../../Assets/Products/Strength/medilogic.jpg"),
                brand: require("../../Assets/Products/Strength/medilogic_logo.png"),
                backcolor: "#926b3e",
                Products: [
                    {
                        id: 1,
                        title: "Pressure Measuring Platform NX (WLAN) ",
                        title2: "A functional measurement system on highest technical level",
                        cover: require("../../Assets/Products/Strength/Products/pressuremessuring.png"),
                        description: "The medilogic foot pressure measuring platform NX offers the unique possibility to enlargen your gangway to your own fits. THe modular concept enables to link up to 25 measuring platforms. In a row, in a double-row or in a rectangle. A single platform gives you the option of dynamic or static pressure measuring underneath the foot. The measuring field is 384 x 384 mm and has 4.096 sensors. This means 2,8 Sensors per square centimeter. The evaluation of the middle step out of several single steps is given by the medilogic software.",
                        description2: "The pressure measuring platform NX as single platform with dynamic footprint. The dynamic footprint evaluated of several steps. The view shows every single step for left and right side as overlay as well as the gaitline of several steps. The pressure measuring Platform NX in the configuration with 7 platforms is a N7 – Here you see it as a gangway.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Strength/Products/pressuremessuring fet.png"),
                                linkname: "medilogic",
                                link: "https://medilogic.com/en/home/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Strength/Products/pressuremessuring h1.png"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "medilogic WLAN insole ",
                        title2: "A functional measurement system on highest technical level",
                        cover: require("../../Assets/Products/Strength/Products/WLAN.jpg"),
                        description: "The high resolution of the pressure load distribution is a useful tool especially for the orthopaedic shoemaker supporting improved diagnosis and quality control. Thus the medilogic foot pressure measuring system facilitates well adapted patient care with insoles and other orthopaedic aids.",
                        description2: "Easy  handling You can choose different lengths for the bootleg of medilogic insoles Thanks to the intuitive software of medilogic you can start directly to work with the system.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Strength/Products/WLAN fet.jpg"),
                                linkname: "medilogic",
                                link: "https://medilogic.com/en/home/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Strength/Products/WLAN h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Foot scanner  ",
                        title2: "A functional recording device at the highest technical level",
                        cover: require("../../Assets/Products/Strength/Products/footscanner.jpg"),
                        description: "The kit of the medilogic FootScanner with its single components allows a well-priced start while buying the single optical FootScann. You can expand it at anytime with the pressure messurement or the messurement of balance.The user-friendly graphical user interface allows a quick and detailled analyses of your messurement results. The medilogic FootScann is the ideal tool for an effective diagnostic, accomodation and documentation. Use our innovate cross linking of approved methods. The interdisciplinary diagnostic tool for an optimal patient treatment.",
                        description2: "The foot scanner in action in everyday clinical use. It can bear anything (up to 180 kg). The easy handling of the medilogic software.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Strength/Products/footscanner fet.jpg"),
                                linkname: "medilogic",
                                link: "https://medilogic.com/en/home/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Strength/Products/footscanner fet.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 19,
                subcategory: "Fast Twitch ISTE",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "Our optical tracking technology, also known as optical motion capture, makes it possible to measure the position of very fast moving objects with extremely high accuracy. Indoor, outdoor, ground-to-air or underwater – no matter what condition, we have your solution. ",
                cover: require("../../Assets/Products/SportsScience/fft.jpg"),
                brand: require("../../Assets/Products/SportsScience/FTT-Logo.png"),
                backcolor: "#6C584A",
                Products: [
                    {
                        id: 1,
                        title: "Isokinetic MED ",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/med.jpg"),
                        description: "The  multi joint Iso-Med machine provides Rehabilitation professionals with an ideal Isokinetic testing and monitoring apparatus. It both regenerates injured muscle tissue and improves performance. For platform exercises, includes; Hip – all movements. Shoulder – all movements. Elbow – Flexion/Extension. Trunk – Flexion/Extension. Ankle/Wrist – Optional.",
                        description2: "Width  3.0m.  Length 3.0m Height 2.1m. Weight 300kg This multi joint machine is for unilateral knee function with Range Limiter device. Right motor moves 180 degrees. For platform exercises, includes the following machines: Hip – all movements. Shoulder – all movements. Elbow – Flexion/Extension. Trunk – Flexion/Extension. Ankle/Wrist – Optional.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/med fet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/med h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/SportsScience/Products/med h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 2,
                        title: "Isokinetic KNEE",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/knee.jpg"),
                        description: "This High Speed Isokinetic Knee machine is the ultimate speed leg extension/flexion machine. Isolate the knee and fire the quadriceps and hamstrings. Perfect for rehabilitation, sports performance and training at speeds that are simply not achievable on other forms of training. Imagine being able to fire the nervous system against resistance at the same speeds you play sports.",
                        description2: "Width 1.2m Length 1.3m Height 1.4m Weight 150kg This High Speed Isokinetic Knee machine is the ultimate speed leg extension/flexion machine. Isolate the knee and fire the quadriceps and hamstrings. Perfect for rehabilitation, sports performance and training at speeds that are simply not achievable on other forms of training. Imagine being able to fire the nervous system against resistance at the same speeds you play sports. Suitable for Isometric/ Isokinetic speeds from 2 degrees/ second to 600 degrees/second. Displays unilateral results for both limbs simultaneously.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/knee.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 2,
                                cover: require("../../Assets/Products/SportsScience/Products/knee h2.jpg"),
                            },
                        ],
                    },
                    {
                        id: 3,
                        title: "Isokinetic Squat ",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/SQUAt.jpg"),
                        description: "The Squat machine is the flagship Isokinetic machine. The importance of squats in athletic performance is well documented. Now you can achieve more power, more speed and more strength safer and faster than any other form of squatting. Imagine being able to fire the nervous system and achieve triple extension against resistance and use data reporting to show improvements over time.",
                        description2: "Width 1.2m Length 2.2m Height 1.6m Weight 200 kg The Squat machine is the flagship Isokinetic machine. The importance of squats in athletic performance is well documented. Now you can achieve more power, more speed and more strength safer and faster than any other form of squatting. Imagine being able to fire the nervous system and achieve triple extension against resistance and use data reporting to show improvements over time.  Select two-way resistance settings to neurologically activate Flexion and Extension contractions. Perfect for rehabilitation, sports performance and training at speeds that are simply not achievable on other forms of training.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/squat ft.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/squat h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/SportsScience/Products/squat h2.jpeg"),
                            },
                        ],
                    },
                    {
                        id: 4,
                        title: "Isokinetic HIP",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/hip.jpg"),
                        description: "The Hip machine is ideal for increasing running speed. It is capable of achieving in excess of 600 – 800 degrees per second in the running flexion/extension position. Replicates high knee lift component of expolsive movements Instantaneously switching resistance between glute and hip flexor, to engage high speed muscle contraction for speed/power development. ",
                        description2: "Length 1.5m Width 1.2m Height 1.4m Weight 150kg The Hip machine is one of the most robust machines on the market. It is capable of achieving in excess of 600 – 800 degrees per second in the running flexion/extension position. Ideal for increasing running speed Glute, hip flexor activation is the ideal way to safely move at these speeds under resistance. Instantaneously switching resistance between glute and hip flexor, to engage high speed muscle contraction for speed/power development. Imagine being able to fire the nervous system against resistance in the running mechanical position at the same speeds you play sports. ",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/hip fet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/hip h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 5,
                        title: "Isokinetic JUMP SQUAT",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/JUMP-Squat.jpg"),
                        description: "This is a simpler form of technology incorporating the same features of the Squat machine. You will still achieve triple extension against resistance (1 to 8 in the resistance scale). It doesn’t have a full computerised function instead a digital LED mini computer counting repetitions, time and calories. Performs dual concentric and concentric/eccentric.",
                        description2: "Width 1.2m Length 2.2m Height 1.6m Weight 200 kg This is a simpler form of technology incorporating the same features of the Squat machine. You will still achieve triple extension against resistance (1 to 8 in the resistance scale). It doesn’t have a full computerised function instead a digital LED mini computer counting repetitions, time and calories. Performs dual concentric and concentric/eccentric.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/biofeedbackfet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/miqus.jpg"),
                            },
                        ],
                    },
                ]
            },
        ],
    },
    {
        id: 7,
        Category: "Rehabilitation",
        cover: require("../../Assets/CategoryPage/Exercise & Sports Physiology.jpg"),
        link: "pukhya/rehabilitation",
        subcategories: [
            {
                id: 9,
                subcategory: "Delsys",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Biomechanics/Delsys-banner.png"),
                brand: require("../../Assets/Products/Biomechanics/Delsyslogo.png"),
                backcolor: "#0a0a0a",
                Products: [
                    {
                        id: 1,
                        title: "4-channel EMG & IMU Sensor ",
                        title2: "4-channel EMG & IMU Sensor ",
                        cover: require("../../Assets/Products/Biomechanics/Products/4-channel EMG & IMU Sensor.png"),
                        description: "4-channel EMG & IMU Sensor",
                        description2: "4-channel EMG & IMU Sensor",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Biomechanics/Products/4-channel EMG fet.png"),
                                linkname: "Delsys",
                                link: "https://delsys.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Biomechanics/Products/4-channel h1.jpg"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Biomechanics/Products/4-channel h2.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 24,
                subcategory: "Fast Twitch (ISTE)",
                title: "We help people measure and analyze motion",
                subtitle: "Applications for motion capture technology",
                subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                description: "Our optical tracking technology, also known as optical motion capture, makes it possible to measure the position of very fast moving objects with extremely high accuracy. Indoor, outdoor, ground-to-air or underwater – no matter what condition, we have your solution. ",
                cover: require("../../Assets/Products/SportsScience/fft.jpg"),
                brand: require("../../Assets/Products/SportsScience/FTT-Logo.png"),
                backcolor: "#6C584A",
                Products: [
                    {
                        id: 6,
                        title: "Rehab Shoulder",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/reshoulder.jpg"),
                        description: "Rehab Shoulder Isokinetic machine. This multi-function Shoulder training machine is for both Low speed and High Speed use. Has bio feedback system and can be fully computerised. This single station multi-function rotary shoulder machine follows the variable speed isokinetic resistance system that naturally adjusts to the acceleration-deceleration strength curve throughout the range of movement (ROM).",
                        description2: "Width: 1.2 m (56”)   Length: 1.6m (63”)   Height 1.6m (63”) Weight 140kg ( 308 lb ) Load 10nm – 500nm Universal Shoulder Isokinetic machine. Multi-function Shoulder training machine is for Low Speed and High Speed use. Can operate as 10 Deg/sec to 600 Deg/sec with two-way independent adjustable resistance. Has bio feedback system and can be fully computerised. This single station multi-function rotary shoulder machine follows the variable speed isokinetic resistance system that naturally adjusts to the acceleration-deceleration strength curve throughout the ROM. Most important when training smaller muscle groups found in the exercise range. Maintains the quality of independent resistance control for appropriate load settings in either direction. Seat pivots 180° for opposite limb exercises and adjusts from flat to 90 degrees period upright period.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/reshoulder fet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/reshoulder h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 7,
                        title: "Rehab Torso",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/retorso.jpg"),
                        description: "Incorrect lumbar stability is the leading cause of injury across all sports. The Torso machine addresses this perfectly by allowing high speed rotation against resistance equally in both directions with zero break effect and eccentric slowing of movement. The Torso machine activates all core muscles allowing for greater stabilisation of the lumbar spine vertebra and discs. Increase your rotational speed and core efficiency.",
                        description2: "Width: 1.3 (51”)  Length: 1.2m (47”)  Height: 2.1m (84”)  Weight: 140kg ( 308 lb ) Load 10nm- 600nm When it comes to safely rotating the spine and core rotators, it imperative it’s done safely. Incorrect lumbar stability is the leading cause of injury across all sports. The Torso machine addresses this perfectly by allowing high speed rotation against resistance equally in both directions with zero break effect and eccentric slowing of movement. The Torso machine activates all core muscles (Rectus Abdominals, Obliques, Transverse Abdominals and Erector Spinae) allowing for greater stabilisation of the lumbar spine vertebra and discs. Increase your rotational speed and core efficiency.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/retorso fet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/retorso h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 8,
                        title: "Rehab Transformer",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/reTransformer.jpg"),
                        description: "The most affordable and versatile portable Isokinetic machine on the market with its compact design and small footprint. It has a height adjustable linear column and comes with all handle attachments to complete a range of movements for all shoulder exercises as well as ankle, wrist, trunk and hip. The Transformer’s speciality is for all Shoulder Rehab exercises with bi-directional independent settings.",
                        description2: "Width:  0.7m   Length: 0.7m   Height: 0.9m   Weight: 70kg The most affordable and versatile portable Isokinetic machine on the market with its compact design and small footprint. The Transformer’s speciality is for all Shoulder Rehab exercises with bi-directional, independent settings. This machine is based around the portable ankle unit. When placed on a height-adjustable linear column, it transforms into the perfect machine for all shoulder exercises as well as wrist, trunk, and hip. It is available to purchase as a non-computerised model or as fully computerised  with a touch screen P/C to view performance output. Record results via a hard copy print out. The Transformer machine has a light weight isokinetic resistance motor and dual resistance control. Comes with all handle attachments to complete all exercises.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/reTransformer fet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/reTransformer h1.jpg"),
                            },
                        ],
                    },
                    {
                        id: 9,
                        title: "Rehab Ankle-wrist",
                        title2: "FOOTPRINT",
                        cover: require("../../Assets/Products/SportsScience/Products/reankle.jpg"),
                        description: "Ankle/ Wrist Isokinetic conditioning machine. Very compact, portable and versatile unit with adjustable independent two-way resistance settings. Exercises: Pronation / Supernation, Inversion / Eversion, Planti / Dorsi Flexion. Internal/ External Rotation. Optional portable p/c for complete Power strength / ROM readings.",
                        description2: "Width: 0.4m (14”)  Length: 0.4m (14”)  Height: 0.25m (10”)  Weight: 45kg ( 99 lb ) Ankle/ Wrist Isokinetic conditioning machine. Very compact portable and versatile unit with adjustable independent two-way resistance settings. Exercises: Pronation / Supernation. Inversion / Eversion. Planti / Dorsi Flexion. Internal/ External Rotation.  Optional portable p/c for complete power strength / ROM readings.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/reankle fet.jpg"),
                                linkname: "fasttwitch",
                                link: "https://fasttwitchisokinetics.com/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/reankle h1.jpg"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 28,
                subcategory: "LBNP (Lower Body Negative Presssure)",
                // title: "We help people measure and analyze motion",
                // subtitle: "Applications for motion capture technology",
                // subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                // description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/SportsScience/Products/LBNP-Bodystyler_image.png"),
                brand: require("../../Assets/Products/Psychology/mbp brand.png"),
                backcolor: "#A6B8DE",
                Products: [
                    {
                        id: 2,
                        title: "LBNP (Lower Body Negative Presssure)",
                        title2: "Lower Body Negative Pressure",
                        cover: require("../../Assets/Products/SportsScience/Products/LBNP-Bodystyler_image.png"),
                        description: "This review presents lower body negative pressure (LBNP) as a unique tool to investigate the physiology of integrated systemic compensatory responses to altered hemodynamic patterns during conditions of central hypovolemia in humans. An early review published in Physiological Reviews over 40 yr ago (Wolthuis et al. Physiol Rev 54: 566-595, 1974) focused on the use of LBNP as a tool to study effects of central hypovolemia, while more than a decade ago a review appeared that focused on LBNP as a model of hemorrhagic shock (Cooke et al. J Appl Physiol (1985) 96: 1249-1261, 2004). Since then there has been a great deal of new research that has applied LBNP to investigate complex physiological responses to a variety of challenges including orthostasis, hemorrhage, and other important stressors seen in humans such as microgravity encountered during spaceflight.",
                        description2: "The LBNP stimulus has provided novel insights into the physiology underlying areas such as intolerance to reduced central blood volume, sex differences concerning blood pressure regulation, autonomic dysfunctions, adaptations to exercise training, and effects of space flight. Furthermore, approaching cardiovascular assessment using prediction models for orthostatic capacity in healthy populations, derived from LBNP tolerance protocols, has provided important insights into the mechanisms of orthostatic hypotension and central hypovolemia, especially in some patient populations as well as in healthy subjects. This review also presents a concise discussion of mathematical modeling regarding compensatory responses induced by LBNP. Given the diverse applications of LBNP, it is to be expected that new and innovative applications of LBNP will be developed to explore the complex physiological mechanisms that underline health and disease.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/SportsScience/Products/LBNP-Bodystyler_image.png"),
                                linkname: "goodpl",
                                link: "https://www.goodpl.kr",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/SportsScience/Products/LBNP-Bodystyler_image.png"),
                            },
                        ],
                    },
                ]
            },
            {
                id: 29,
                subcategory: "HeadAppIN",
                // title: "We help people measure and analyze motion",
                // subtitle: "Applications for motion capture technology",
                // subdesc: "Our technology is used by researchers, biomechanists, physicians and engineers from all over the world. However, anyone that is interested in getting objective information about how things move can benefit from our technology. For example, our motion capture systems can be used to find and prevent injuries, improve performance in biomechanics and help engineers build better products and increase production efficiency.",
                // description: "World leader in human measurement in complex and real environments for over 30 years, TEA innovates for the well-being of humans with agile solutions and services.",
                cover: require("../../Assets/Products/Rehabilitation/headapp.webp"),
                brand: require("../../Assets/Products/Rehabilitation/headapp brand.png"),
                backcolor: "#F2A91F",
                Products: [
                    {
                        id: 2,
                        title: "HeadAppIN",
                        title2: "We offer integrated treatment with personalized solutions for mental and cognitive health.",
                        cover: require("../../Assets/Products/Rehabilitation/headapp.webp"),
                        description: "Cognitive rehabilitation or cognitive retraining therapy aims to rebuild cognitive functions that have been impaired and help patients return to their daily lives. Cognitive rehabilitation refers to a number of therapies that offer retraining in cognitive functions. The main focus is to correct deficits in memory, concentration and attention, perception, learning, planning, sequencing, and judgment. Cognitive rehabilitation therapy (CRT) aims to enhance the person’s capacity to process and interpret information. This can improve the person’s ability to function in all aspects of daily life, such as maintaining relationships with family and friends, working, and participating in their community.",
                        description2: "Discover our solution HeadApp – Computer-Aided Cognitive Screening and Training specifically designed to aid patients with acquired brain injuries, neurodevelopmental disorders, and cognitive deficits in psychiatric conditions.",
                        mainhigh: [
                            {
                                id: 1,
                                logo: <CiMedicalCross />,
                                title: "heading first"
                            },
                            {
                                id: 2,
                                logo: <LuSunMedium />,
                                title: "heading second",
                            },
                            {
                                id: 3,
                                logo: <CiMedicalMask />,
                                title: "heading third",
                            },
                            {
                                id: 4,
                                logo: <FaBacteria />,
                                title: "heading fourth",
                            },
                        ],
                        mainfet: [
                            {
                                id: 1,
                                desc: "this is first features"
                            },
                            {
                                id: 2,
                                desc: "this is second features"
                            },
                            {
                                id: 3,
                                desc: "this is third features"
                            },
                            {
                                id: 4,
                                desc: "this is fourth features"
                            },
                            {
                                id: 4,
                                desc: "this is fifth features"
                            },
                            {
                                id: 4,
                                desc: "this is sixth features"
                            },
                        ],
                        feature: [
                            {
                                id: 1,
                                title: "this is title",
                                desc: "this is description",
                                cover: require("../../Assets/Products/Rehabilitation/headapp fet.webp"),
                                linkname: "headapp",
                                link: "https://headapp.in/",
                            }
                        ],
                        highlights: [
                            {
                                id: 1,
                                cover: require("../../Assets/Products/Rehabilitation/headapp h1.png"),
                            },
                            {
                                id: 2,
                                cover: require("../../Assets/Products/Rehabilitation/headapp h2.png"),
                            },
                        ],
                    },
                ]
            },
        ],
    },
]

export default CategoriesData