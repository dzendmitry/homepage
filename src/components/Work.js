import { Heading, Box, VStack, Flex, Stack, Text, Link, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import Technologies from "./Technologies";

const works = [
    {
        name: "Holland & Barrett",
        img: require("../img/hnb_logo.jpg"),
        url: "https://www.hollandandbarrett.com/",
        lineColor: "#365F49",
        jobs: [
            {
                title: "Engineering Manager",
                from: "January 2023",
                to: "Present",
                format: "Hybrid",
                location: "Valencia, Spain",
                description: "Leading a cross-functional team of 10 developers, I identify and support the growth of talents, provide feedback, and oversee people's personal development. I collaborate with the team and product owner, as well as with other leads to enhance the project.",
                achievements: [
                    "The project involves creating a storage system for company products with an editing interface. We provide an API for the production environment and a UI for internal users",
                ],
                technologies: ["Go", "Kubernetes (k8s)", "PostgreSQL", "Memcache"],
            }
        ]
    },
    {
        name: "Ozon",
        img: require("../img/ozon_logo.jpg"),
        url: "https://ozon.ru/",
        lineColor: "#0458F2",
        jobs: [
            {
                title: "Team Lead Video Platform",
                from: "January 2021",
                to: "March 2023",
                format: "On-Site",
                location: "Moscow, Russian Federation",
                description: "Design architecture and develop a video platform for VOD-s transcoding and live streaming.",
                achievements: [
                    "Leading a team of six developers.",
                    "Scrum, working with backlog, working with stakeholders, plannings, 1:1s, retros."
                ],
                technologies: ["go", "ffmpeg", "nginx", "ceph", "c", "postgresql", "k8s", "ansible"],
            },
            {
                title: "Team Lead SEO Analytics",
                from: "January 2020",
                to: "January 2021",
                format: "On-Site",
                location: "Moscow, Russian Federation",
                description: "Creating an SEO analytics service: processing large arrays of information, building reports and metrics.",
                achievements: [
                    "Leadership a team of three developers.",
                    "Scrum, working with backlog, working with stakeholders, plannings, 1:1s, retros."
                ],
                technologies: ["Go", "Postgres", "Clickhouse"],
            },
            {
                title: "Senior Golang developer",
                from: "April 2018",
                to: "January 2020",
                format: "On-Site",
                location: "Moscow, Russian Federation",
                description: "Developed services in Golang: catalog, cart, checkout.",
                achievements: [
                    "Took part in infrastructure projects: ci/cd, kubernetes, service mesh.",
                    "Developed category prediction service using machine learning stack.",
                ],
                technologies: ["Go"],
            }
        ],
    },
    {
        name: "Lazada Group",
        img: require("../img/lazada_logo.jpg"),
        url: "https://lazada.com/en/",
        lineColor: "#23226C",
        jobs: [
            {
                title: "Senior Go Developer",
                from: "September 2017",
                to: "April 2018",
                format: "On-Site",
                location: "Moscow, Russian Federation",
                description: "Golang backend service developer. Develop a distributed product assembly service and prepare data for the search index.",
                achievements: [
                    "Optimization of the speed of the service (increase in productivity by 3 times)",
                    "Implementation of a parallel distributed product assembly algorithm with synchronization of service instances via etcd",
                ],
                technologies: ["Go", "Rest API", "etcd", "RabbitMQ", "Aerospike", "Elasticsearch"],
            }
        ],
    },
    {
        name: "ITooLabs",
        img: require("../img/itoolabs_logo.jpg"),
        url: "https://itoolabs.com/",
        lineColor: "#EF7216",
        jobs: [
            {
                title: "Golang / C++ developer",
                from: "December 2014",
                to: "September 2017",
                format: "On-Site",
                location: "Tula Region, Russian Federation",
                description: "Golang / C++ backend developer in telecommunication company. Participation in the project to develop a cloud-based, highly-loaded IP telephony service.",
                achievements: [
                    "Development of the call control service and its integration with the existing cloud PBX (Go, Rest API, leveldb)",
                    "Development of a system of counteraction to fraud (Go, leveldb)",
                    "Development of call history service (Go, leveldb, MongoDB)",
                    "Participation in the development of VoIP media gateway. soft realtime system (C ++, libevent)",
                    "Writing of phone calls scenarios",
                    "Creation of MVP for recognition of emotions in the records of telephone conversations (Python, numpy, scipy, keras)",
                    "Creation of an emotional markup system for telephone conversations (Go, PostgreSQL, JavaScript)",
                ],
                technologies: ["Go", "C++", "Intel IPP", "libevent", "Linux", "Python"],
            }
        ],
    }
];

function calculatePeriod(from, to) {
    const fromDate = new Date(from);
    const toDate = new Date(to);
    
    let years = toDate.getFullYear() - fromDate.getFullYear();
    let months = (toDate.getMonth() - fromDate.getMonth()) + 1;

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months };
}

function Period({from, to}) {

    if (to.trim().toLowerCase().match(/present/)) {
        to = Date.now();
    }

    const period = calculatePeriod(from, to);

    if (period.years <= 0 && period.months <= 0) {
        return null;
    }

    let yearsStr = 'year';
    if (period.years > 1) {
        yearsStr += 's';
    }

    let monthsStr = 'month';
    if (period.months > 1) {
        monthsStr += 's';
    }

    return (
        <>(
            {period.years > 0 ? `${period.years} ${yearsStr}` : null}
            {period.years > 0 && period.months > 0 ? ' ' : ''}
            {period.months > 0 ? `${period.months} ${monthsStr}` : null}
        )</>
    );
}

export default function Work() {
    return (
        <Box id="work-section" bg="ghostwhite">
            <Heading as="h2" size="xl" textAlign="center" pt={5} color="#454545">Work</Heading>
            <Flex
            direction="column"
            minHeight="100vh" 
            bg="ghostwhite"
            p={5}
            justifyContent="center" 
            alignItems="center">
                {works.map((work, index) => {
                    return (
                        <Stack
                        key={index}
                        direction={{base: "column", md: "row"}}
                        p={10}
                        m={4}
                        bg="white"
                        borderRadius={10}
                        border="2px"
                        borderColor="lightgray"
                        width="100%"
                        maxWidth="1260px">
                            <VStack>
                                <Link href={work.url} isExternal><Image src={work.img} alt={work.name} maxWidth="50px" maxHeight="50px"/></Link>
                                <div className="vl" style={{borderColor: work.lineColor}}></div>
                            </VStack>
                            <VStack alignItems="left" width="100%">
                                <Stack 
                                direction={{base: "column", md: "row"}} 
                                justifyContent="space-between" 
                                alignItems="center">
                                    <VStack alignItems={{base: "center", md: "flex-start"}}>
                                        <Heading as="h4" size="md" color="#454545">{work.jobs[0].title}</Heading>
                                        <Heading as="h5" size="sm" color="#454545"><Link href={work.url} isExternal>{work.name}</Link></Heading>
                                    </VStack>
                                    <Text color="#4c4c4c" as="b">
                                        {work.jobs[work.jobs.length-1].from} - {work.jobs[0].to} <Period from={work.jobs[work.jobs.length-1].from} to={work.jobs[0].to} />
                                    </Text>
                                </Stack>
                                {work.jobs.map((job, index) => {
                                    return (
                                        <VStack key={index} alignItems="left">
                                            <Text as="b">{job.title}</Text>
                                            <Text fontSize="sm" color="#454545">{job.format}</Text>
                                            <Text color="#454545">{job.from} - {job.to} <Period from={job.from} to={job.to}/></Text>
                                            <Text fontSize="sm" color="#454545">{job.location}</Text>
                                            <Text>{job.description}</Text>
                                            {job.achievements.length > 0 ?
                                                <>
                                                <Text as="b">Achievements:</Text>
                                                <UnorderedList>
                                                    {job.achievements.map((achievement, index) => {
                                                        return <ListItem key={index}><Text>{achievement}</Text></ListItem>
                                                    })}
                                                </UnorderedList>
                                                </>
                                            : null }
                                            {job.technologies.length > 0 ? <Technologies technologies={job.technologies} /> : null}
                                            {index < work.jobs.length - 1 ? <><hr /></> : null}
                                        </VStack>
                                    );
                                })}
                            </VStack>
                        </Stack>
                    )
                })}
            </Flex>
        </Box>
    );
}
