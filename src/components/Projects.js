import { Box, Heading, VStack, SimpleGrid, Text, Link } from "@chakra-ui/react";
import { faGit, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from 'react-player'
import Technologies from "./Technologies";

const ProjectTypes = {
    Code:     faGit,
    Video:    faYoutube,
    Article:  faNewspaper,
};

const projects = [
    {
        name: "Integration of ML models into a service on Go | Dmitry Zenin, Ozon",
        url: "https://www.youtube.com/watch?v=Ib934FGLsCU",
        type: ProjectTypes.Video,
        description: "The story of how Ozon applied machine learning to predict categories. The experiments were conducted using python and its ecosystem for ml. However, the company's production runs on go and Dmitry told how they implemented their developments into the existing go service, what metrics they covered it with and what they got as a result, both in terms of the original task and in terms of the performance of the entire system.",
        technologies: ["Go", "Python", "Machine learning"],
    },
    {
        name: "The creation of a corpus of emotional data for the system of emotion-related states assessment of a dialogue with the call center operator",
        url: "https://www.researchgate.net/publication/342571475_The_creation_of_a_corpus_of_emotional_data_for_the_system_of_emotion-related_states_assessment_of_a_dialogue_with_the_call_center_operator",
        type: ProjectTypes.Article,
        description: "The main objective for the development of systems of emotion recognition in speech is the presence of labeled emotional corpus that can be used at the training stage. For some languages, such databases exist, for example, Danish Emotional Speech Corpus, the Berlin Emotional Database, the Spanish Emotional Speech Database, the Chinese Emotion Speech Database, the Japanese Emotional Speech Database, etc. For the Russian language, the only available database RUSLANA contains entries, whose emotional state has been simulated by linguistics students in the early 2000s, and the main classifiers, both on the basis of traditional methods (SVM, Hidden Markov Models, etc.), and on the basis of deep learning methods, show extremely low results on this corpus. In addition, the ways of representing emotional states based on five–seven universal basic emotions, most often used in the formation of such emotional corpora, are not very suitable for analysis of dialogues in call centers. In this paper we propose a scale of emotional states that characterizes the positive or negative attitude of the speaker and the activation level of negative emotion in case it is present, as well as the technique for labeling a record of telephone conversations to create a corpus of emotion-related states of speakers in the dialogue",
        technologies: ["Go", "Python", "JavaScript", "Machine learning"],
    },
    {
        name: "Project 'Stepan'",
        url: "https://github.com/dzendmitry/stepan",
        type: ProjectTypes.Code,
        description: "This project develops a custom voice assistant capable of recognizing several predefined commands, specifically for hands-free dashboard navigation. Built with a Python-based backend, it employs Support Vector Machines (SVM) for command classification, Convolutional Neural Networks (CNN) for audio feature extraction, and a One-Class Classifier to handle outlier detection, ensuring accurate command recognition. The frontend is implemented as a Chrome browser plugin, enabling seamless voice-activated dashboard switching for metric monitoring. This solution enhances user interaction and workflow efficiency through robust real-time voice command processing.",
        technologies: ["Python", "JavsScript", "Machine learning"],
    },
    {
        name: "Categories predictor",
        url: "https://github.com/dzendmitry/category_prediction",
        type: ProjectTypes.Code,
        description: "This project focuses on building a category prediction system for an online store using Python, Word2Vec, and neural networks. The system employs Word2Vec for effective product description embeddings, capturing semantic relationships between words, which enhances model understanding of product context. A neural network architecture then processes these embeddings to predict accurate product categories, streamlining product categorization and improving the shopping experience. This solution aims to deliver high accuracy in classification, reducing manual efforts and increasing the efficiency of category management in e-commerce platforms.",
        technologies: ["Python", "Machine learning"],
    },
    {
        name: "Rating service",
        url: "https://github.com/dzendmitry/rating-service",
        type: ProjectTypes.Code,
        description: "It's just a simple composition of microservices is used as a service to keep notes. It's written in Golang, using Mongo database as persistent storage and Redis kv storage as cache. Mongo database and redis cache are replicated in master-slave mode for ensuring service availability. Parsers are presented as separated microservices and discovered by rating service using multicast network. Another one microservice is for users authentication. It communicates only with Mongo db storage. Sessions mechanism is implemented using Mongodb TTL indexes. ... and of course Docker for testing and deployment.",
        technologies: ["Go", "Mongo", "Redis"],
    },
    {
        name: "Palm detector",
        url: "https://github.com/dzendmitry/palm-detector",
        type: ProjectTypes.Code,
        description: "This project involves developing a real-time palm recognition system within a video stream, using C++ and a Qt-based interface. OpenCV is utilized for efficient image processing and contour detection, while machine learning models establish a similarity match between facial and palm skin tones, enhancing recognition accuracy. The system identifies and isolates palm contours to achieve precise tracking and segmentation, with applications in gesture recognition, security, and human-computer interaction. This solution delivers a responsive and user-friendly experience by integrating advanced image processing and machine learning techniques for reliable palm recognition.",
        technologies: ["C++", "Qt", "OpenCV", "Machine learning"],
    },
    {
        name: "K-Means OpenCL",
        url: "https://github.com/dzendmitry/K-Means-OpenCL",
        type: ProjectTypes.Code,
        description: "This project implements an efficient clustering algorithm in C++, leveraging OpenCL for GPU-based parallel computation. By utilizing the GPU’s processing power, the clustering method achieves significantly faster performance compared to traditional CPU-based approaches, making it suitable for large datasets and real-time applications. OpenCL enables flexible hardware acceleration, allowing the algorithm to perform rapid distance calculations and data partitioning, ensuring scalable and high-performance clustering. This solution showcases the potential of GPU-accelerated computing in achieving efficient, high-speed data processing in clustering tasks.",
        technologies: ["C++", "OpenCL", "Machine learning"],
    },
    {
        name: "tcmd",
        url: "https://github.com/dzendmitry/tcmd",
        type: ProjectTypes.Code,
        description: "This project introduces an easy-to-use Python-based console client for the Linux tc (Traffic Control) utility, designed to streamline network condition testing for various applications. By offering a simplified interface, the client enables users to simulate network disruptions and issues, such as latency, packet loss, and bandwidth throttling, directly from the command line. This tool is ideal for developers and testers looking to validate application performance and resilience under adverse network conditions, enhancing testing efficiency and control over network emulation settings.",
        technologies: ["Python"],
    }
];

export default function Projects() {
    return (
        <Box id="projects-section" bg="gainsboro">
            <Heading as="h2" size="xl" pt="5" textAlign="center" color="#454545">Projects</Heading>
            <SimpleGrid
            minHeight="100vh"
            columns={{base: 1, md: 3}}
            spacing={10}
            pt={10} pb={10} pl={5} pr={5}>
                {projects.map((project, index) => {
                    return (
                        <VStack
                        key={index}
                        backgroundColor="#fff"
                        borderRadius={10}
                        border="2px"
                        borderColor="#595959"
                        alignItems="center"
                        p={3}>
                            <Link href={project.url} isExternal><FontAwesomeIcon icon={project.type} size="lg" /></Link>
                            <Text as="b" textAlign="center"><Link href={project.url} isExternal>{project.name}</Link></Text>
                            {project.type === ProjectTypes.Video ?
                            <ReactPlayer width="100%" height="60%" url={project.url} controls={true}/>
                            : null}
                            <Text textAlign="justify">{project.description}</Text>
                            <Technologies technologies={project.technologies} />
                        </VStack>
                    )
                })}
            </SimpleGrid>
        </Box>
    );
}