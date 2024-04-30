import image_1 from '../resources/image_1.jpg';
import image_2 from '../resources/image_2.png';
import image_3 from '../resources/image_3.jpg';
import image_4 from '../resources/image_4.jpg';
import image_4b from '../resources/image_4_2.jpg';

import careerAssessment from '../resources/logos/careerAssment.svg';
import careerSuit from '../resources/logos/careerSuit.svg';
import faq from '../resources/logos/faq.svg';
import tool from '../resources/logos/atsTool.svg';
import ats from '../resources/logos/atsSearch.svg';
import resume from '../resources/logos/resume.svg';

export const navItems = [
    { id: 1, href: '#', title: 'Career Advice', class: 'nav-list-link' },
    { id: 2, href: '#', title: 'Internship Opportunities', class: 'nav-list-link' },
    { id: 3, href: '#', title: 'Resume Workshop', class: 'nav-list-link'  },
    { id: 4, href: '#', title: 'Job Posting', class: 'nav-list-link' },
  ];
const dummyData = 'dummt data !!! dummt data !!!dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!! dummt data !!!';

export const bodyData = [
  {
    id: 1,
    class: 'career-advice',
    bgImg: false,
    left2right: false,
    imgData: { imgAlt: 'advice image', imgSrc: image_3 },
    desc: { title: 'Career Advice', content: `UIS is your one-stop shop for navigating your career path! Get personalized Career Advice tailored to your goals, from interview prep and resume building to exploring different fields through workshops and assessments.  Our experts answer all your burning FAQ related to your career, helping you discover your strengths and interests to find your perfect Career Suit and land that dream job.` },
    subData: [
      { id: 1, icon: careerAssessment, alt: 'Career Assessment icon',  title: 'Career Assessment', subTitle: 'Interactive Activities & Insights', linkList: [], content: `Get a head start on your career journey! <a href='javascript:void(0);' class='hyperLink-high'>Our career assignment</a> series provides you with interactive activities and resources to explore different career paths.  Through self-reflection prompts, research guides, and skill-building exercises, you'll gain valuable insights into your interests, strengths, and potential career matches.`, pby: '' },
      { id: 2, icon: careerSuit, alt: 'career suit icon', title: 'Career suit', subTitle: 'Find your perfect career fit', linkList: [], content: `Through personalized career assessments, skills exploration workshops, and one-on-one coaching, we'll guide you in discovering your strengths, interests, and values.  Together, we'll tailor <a href='javascript:void(0);' class='hyperLink-high'>a career path</a> that perfectly suits your unique skillset and sets you up for success.`, pby: ''  },
      { id: 3, icon: faq, alt: 'FAQ icon', title: `Book an Appoitment/FAQ's`, subTitle: 'FAQs & personalized advice', linkList: [], content: `Check out our comprehensive <a href='javascript:void(0);' class='hyperLink-high'>FAQ section</a> to find answers to your most pressing career questions. From "How do I choose a career path?" to "What kind of experience should I highlight on my resume?", we've got you covered. <a href='javascript:void(0);' class='hyperLink-high'>Book An Appoitment Now</a>`, pby: '' }
    ]
  },
  {
    id: 2,
    class: 'career-internship',
    bgImg: true,
    left2right: true,
    imgData: { imgAlt: 'internship image', imgSrc: image_1 },
    desc: { title: 'Internship Opportunities', content: `Launch your career with UIS's diverse Internship Opportunities! Gain real-world experience through our Grad/Undergrad Internship programs, connecting you with businesses, government agencies, and non-profits across various fields. Explore your interests, develop valuable skills, and build your network - all while earning academic credit. The UIS Career Development Center provides personalized guidance throughout your internship journey, from identifying placements to crafting a stellar resume and acing interviews.` },
    subData: [
      { id: 1, icon: '', alt: '',  title: 'Undergrad Iternships programs', subTitle: '', linkList: [{title: 'Internships and Prior Learning'}, {title: 'Campus Recreation Employment'}], content: '', pby: '' },
      { id: 2, icon: '', alt: '',  title: 'Graduate Iternships programs', subTitle: '', linkList: [{title: 'Graduate Assistantships'}, {title: 'Graduate Public Service Intern'}, {title: 'Illinois Legislative Staff Intern Program'}, {title: 'Public Affairs Reporting Program'}], content: '', pby: '' },
      { id: 3, icon: '', alt: '',  title: 'Career Development Center', subTitle: '', linkList: [], content: `The UIS Career Development Center empowers students to leverage their strengths for personal and professional success. Through provided resources, partnerships, and counseling, we can prepare students for lifelong career adaptability and fulfillment. Login to career connect`, pby: '(powered by handshake)' }
    ]
  },
  {
    id: 3,
    class: 'career-resume',
    bgImg: false,
    left2right: true,
    imgData: { imgAlt: 'resume image', imgSrc: image_2 },
    desc: { title: 'Resume Workshop', content: `UIS's Resume Workshop equips you to craft a resume that gets noticed! Learn the secrets of building an ATS-friendly document, highlighting your skills and experience effectively. Our workshop will guide you on What to Include in Resume, provide user-friendly tools for resume creation, and ensure your resume stands out from the crowd.` },
    subData: [
      { id: 1, icon: tool, alt: 'Register for Workshop',  title: 'Register for Workshop', subTitle: 'Build resume using our tools', linkList: [], content: `Learn how to craft a resume that gets noticed! Our workshop provides user-friendly <a href='javascript:void(0);' class='hyperLink-high'>tools and customizable templates</a> to build a strong resume that showcases your skills and experience. <a href='javascript:void(0);' class='hyperLink-high'>Register For Workshop</a>`, pby: '' },
      { id: 2, icon: ats, alt: 'ATS Friendly',  title: 'ATS Friendly', subTitle: 'ATS-ready for maximum impact', linkList: [], content: `Optimize your application for <a href='javascript:void(0);' class='hyperLink-high'>Applicant Tracking Systems (ATS).</a> These systems scan resumes for keywords, so you'll be sure to highlight the skills and experience that hiring managers are looking for, increasing your chances of landing an interview.`, pby: '' },
      { id: 3, icon: resume, alt: 'What to include in resume',  title: 'What to include in resume', subTitle: 'Level up your resume', linkList: [], content: `Building a strong resume is key to landing your dream job. We'll guide you through what to include, from crafting a compelling summary to showcasing relevant skills and experience. Learn how to quantify your achievements and tailor your resume to specific positions. Get expert tips to <a href='javascript:void(0);' class='hyperLink-high'>make your resume stand out</a> from the crowd and get noticed by hiring managers.`, pby: '' }
    ]
  },
  {
    id: 4,
    class: 'career-posting',
    bgImg: true,
    left2right: false,
    imgData: { imgAlt: 'job image', imgSrc: image_4b },
    desc: { title: 'Job Postings', content: `Exclusive Career Building links provided by the Career Development Center!!!` },
    subData: [
      { id: 1, icon: '', alt: '',  title: 'Career & Job Search Links', subTitle: '', linkList: [{title: 'Careerjet'}, {title: 'Indeed'}, {title: 'LinkedIn'}, {title: 'Monster'}, {title: 'USAJobs'}], content: '', pby: '' },
      { id: 2, icon: '', alt: '',  title: 'Entery Level for New Graduates', subTitle: '', linkList: [{title: 'CollegeRecruiter'}, {title: 'After College'}, {title: 'Career In Government'}], content: '', pby: '' },
      { id: 3, icon: '', alt: '',  title: 'Alumni', subTitle: '', linkList: [{title: 'UIS Career Connect'}, {title: 'Career Service'}], content: '', pby: '' },
      { id: 4, icon: '', alt: '',  title: 'Recruiters', subTitle: '', linkList: [{title: 'Career Portal Recruiters'}, {title: 'Recruiters online network'}], content: '', pby: '' }
      
    ]
  }
];

export const footerData = [
  {
    id: 1,
    title: 'Campus Links',
    links: [
      { id: 1, href: 'javascript:void(0)', name: 'Driving Directions' },
      { id: 2, href: 'javascript:void(0)', name: 'Emergency Info' },
      { id: 3, href: 'javascript:void(0)', name: 'Employment' },
      { id: 4, href: 'javascript:void(0)', name: 'Library' },
      { id: 5, href: 'javascript:void(0)', name: 'Maps' },
      { id: 6, href: 'javascript:void(0)', name: 'Virtual Tool' },
      { id: 7, href: 'javascript:void(0)', name: 'Website Feedback' },
    ]
  },
  {
    id: 2,
    title: 'Site Links',
    links: [
      { id: 1, href: 'https://www.uis.edu/admission-aid', name: 'Admission & Aid' },
      { id: 2, href: 'https://www.uis.edu/academics', name: 'Academics' },
      { id: 3, href: 'https://www.uis.edu/athletics-recreation', name: 'Athletics & Recreation' },
      { id: 4, href: 'https://www.uis.edu/uis-life', name: 'UIS Life' },
      { id: 5, href: 'https://www.uis.edu/alumni-giving', name: 'Alumni & Giving' },
      { id: 6, href: 'https://www.uis.edu/about', name: 'About' }
    ]
  }
];