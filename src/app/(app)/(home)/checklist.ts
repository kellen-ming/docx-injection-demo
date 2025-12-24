export interface Question {
  id: string;
  statement: Record<string, string>;
  options: string[];
}
export interface ChecklistItem {
  id: number;
  title: Record<string, string>;
  description: Record<string, string>;
  references?: string[];
  questions: Question[];
}

export const checklist: ChecklistItem[] = [
  {
    id: 1,
    title: {
      en: "1. Uphold equity",
      "zh-hant": "1. 維護平等",
    },
    description: {
      en: "Upholding the value of equity is striving to eliminate disparities and address systemic inequalities. It seeks to ensure that everyone has equal opportunities, access to services, and the ability to fully participate and benefit from them.",
      "zh-hant":
        "維護平等的價值在於致力消除因文化造成的差異並解決結構上的不平等，確保每個人都擁有平等的機會獲得服務，並能充分參與及於所接受的服務中得益。",
    },
    questions: [
      {
        id: "equity_1",
        statement: {
          en: "I promote treating people equally regardless of their cultural background in the service.",
          "zh-hant": "在服務過程中，我推動平等對待服務使用者，不論其文化背景。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "equity_2",
        statement: {
          en: "I advocate for my unit to motivate everyone to actively participate in the service.",
          "zh-hant": "我提倡我的服務單位去推動每個人積極參與服務。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "equity_3",
        statement: {
          en: "I advocate for my unit to identify service processes which obstruct equal participation.",
          "zh-hant": "我提倡我的服務單位識別會妨礙服務使用者平等參與服務的流程。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "equity_4",
        statement: {
          en: "I believe it is important that all my service users receive culturally appropriate service.",
          "zh-hant": "我相信讓所有服務使用者獲得文化適切的服務是很重要的。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "equity_5",
        statement: {
          en: "I believe that equity for non-Chinese speaking communities should be an indispensable element of my service delivery.",
          "zh-hant": "我相信平等對待非華語社群是我提供服務時不可或缺的元素。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "equity_6",
        statement: {
          en: "I feel responsible for ensuring that my unit's service considers the needs of different cultural backgrounds.",
          "zh-hant": "我感到有責任確保我的服務單位所提供的服務應考慮到不同文化背景人士的需要。",
        },
        options: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "2. Respect diversity",
      "zh-hant": "2. 尊重多元文化",
    },
    description: {
      en: "Respect involves valuing and honouring the cultural beliefs, practices, and experiences of individuals and communities. Service providers approach their work with an attitude of respect, treating everyone with fairness and without judgment.",
      "zh-hant":
        "尊重指重視和欣賞個人和社群的獨特文化信仰、習慣和經驗。服務提供者以尊重及不批判的態度，公平對待每一個人。",
    },
    questions: [
      {
        id: "diversity_1",
        statement: {
          en: "I accept that non-Chinese speaking people may prefer variable degrees of integration with the local culture.",
          "zh-hant": "我接受非華語人士可能對與本地文化的融合有不同程度的偏好。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "diversity_2",
        statement: {
          en: "I understand that people are not defined by their culture.",
          "zh-hant": "我理解每個人並不應該由他們的文化來定義。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "diversity_3",
        statement: {
          en: "I understand that the differences between individuals within a culture can be significant.",
          "zh-hant": "我理解即使來自同一文化，每個人之間都可能有明顯的差異。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "diversity_4",
        statement: {
          en: "I advocate for my service unit to show appreciation for multicultural, differing perspectives, life experiences, values, and norms.",
          "zh-hant": "我提倡我的服務單位對多元文化、不同文化視角、生活經驗、價值觀和規範表達欣賞。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "diversity_5",
        statement: {
          en: "I take the appropriate action when the behaviour of other staffs or service users is culturally insensitive.",
          "zh-hant": "當有員工或服務使用者表現出缺乏文化敏感度的行為時，我會採取適當的行動。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "diversity_6",
        statement: {
          en: "I advocate for my service unit to incorporate principles and practices that promote cultural diversity.",
          "zh-hant": "我提倡我的服務單位融合促進文化多樣性的原則和實踐。",
        },
        options: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 3,
    title: {
      en: "3. Self-awareness and reflection",
      "zh-hant": "3. 具自我意識及反思",
    },
    description: {
      en: "Become aware of own cultural biases and assumptions, recognise different cultural perspectives and how they impact the interactions with others. Service providers work with humility, openness, and willingness to learn from diverse cultural experiences.",
      "zh-hant":
        "意識到自己對不同文化的偏見和假設，並理解不同的文化視角及其對人際互動的影響。服務提供者應以謙遜、開放及積極的態度，從多元文化經驗中學習。",
    },
    questions: [
      {
        id: "awareness_1",
        statement: {
          en: "I understand how personal experiences may affect interactions with people from a specific culture while providing service.",
          "zh-hant": "我明白在提供服務時個人經驗可能影響與特定文化背景人士的互動。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "awareness_2",
        statement: {
          en: "I am aware of potential stereotypes, biases and misconceptions regarding other cultures and the consideration of my service.",
          "zh-hant": "我意識到自己對其他文化的潛在刻板印象、偏見和誤解，以及這些因素對我提供服務時的影響。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "awareness_3",
        statement: {
          en: "I am careful to identify cultural differences in the entire cultural community.",
          "zh-hant": "我謹慎地識別整個文化社群中的文化差異。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "awareness_4",
        statement: {
          en: "I do not generalise a specific behaviour presented by an individual to the entire cultural community.",
          "zh-hant": "我不會將個人表現出的特定行為概括成為整個文化社群的行為表現。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "awareness_5",
        statement: {
          en: "I am aware of my values, beliefs, assumptions and attitudes about cultural diversity and how this may impact my work practices.",
          "zh-hant": "我意識到自己對文化多元的價值觀、信念、假設和態度，以及這些範疇如何影響我的工作實踐。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "awareness_6",
        statement: {
          en: "I reflect on my experiences with non-Chinese speaking people and adjust my work practices.",
          "zh-hant": "我反思與非華語人士的相處經驗，並調整我的工作實踐。",
        },
        options: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 4,
    title: {
      en: "4. Create inclusivity",
      "zh-hant": "4. 建立包容性環境",
    },
    description: {
      en: "Create an inclusive environment where everyone feels welcome and valued. Service providers strive to eliminate barriers and biases that may prevent individuals from accessing and benefiting from services. Ensures that services are accessible, welcoming, and responsive to the needs, perspectives, and identities of all individuals, regardless of their cultural background.",
      "zh-hant":
        "建立一個包容的環境，使每個人都感到受歡迎和被重視。服務提供者致力消除窒礙服務使用者獲取和受益於服務的障礙和偏見，確保不論服務使用者的文化背景，服務都是可暢達使用和友善，並能回應他們的需要、視角和身份。",
    },
    questions: [
      {
        id: "inclusivity_1",
        statement: {
          en: "I advocate for my service unit's information to be reviewed regularly to ensure that the available service settings meet the cultural requirements of service users.",
          "zh-hant": "我提倡定期檢視我的服務單位提供的資訊，以確保單位內的服務環境安排符合服務使用者的文化需要。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "inclusivity_2",
        statement: {
          en: "I try to provide a familiar, welcoming physical environment by demonstrating multicultural elements in promotional materials and displaying decorations.",
          "zh-hant": "我嘗試透過於宣傳物品及環境擺設裝飾中展示多元文化元素，以提供一個熟悉且文化友善的環境。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "inclusivity_3",
        statement: {
          en: "I feel responsible for developing and implementing strategies to minimise barriers to accessing services for service users of different cultural backgrounds.",
          "zh-hant": "我感到有責任制定和實施策略，以移除不同文化背景服務使用者獲取服務的障礙。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "inclusivity_4",
        statement: {
          en: "I am aware of and explore the service user's preferred language before providing service.",
          "zh-hant": "在提供服務前，我會注意並了解服務使用者的首選語言。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "inclusivity_5",
        statement: {
          en: "I provide service that considers the service user's culture, religion, family practices and norms.",
          "zh-hant": "我提供的服務會考慮到服務使用者的文化、宗教、家庭習俗和文化傳統。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "inclusivity_6",
        statement: {
          en: "Before providing services, I seek information on acceptable behaviour, courtesies, customs, and expectations that try to offer unique services to non-Chinese speaking families.",
          "zh-hant":
            "在提供服務前，我會尋求對方可接受的相關行為、禮儀、習俗和期望的資訊，以便為非華語家庭提供適切的服務。",
        },
        options: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 5,
    title: {
      en: "5. Tailored support",
      "zh-hant": "5. 度身訂制的支援",
    },
    description: {
      en: "Each individual has unique needs, preferences, and cultural backgrounds. Service providers tailor their support and interventions to meet the specific requirements of each individual, considering their cultural background as one aspect of their identity.",
      "zh-hant":
        "每個人都有獨特的需要、偏好和文化背景。服務提供者於提供服務時會根據服務使用者的文化背景，為每個人的獨特需要提供度身訂制的支援和介入。",
    },
    questions: [
      {
        id: "support_1",
        statement: {
          en: "I tailor my support according to the feedback, responses, and observations of service users during the service process.",
          "zh-hant": "我根據服務使用者的回饋、回應和在服務過程中觀察到的情況，提供個人化的服務。",
        },
        options: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 6,
    title: {
      en: "6. Engagement and collaboration",
      "zh-hant": "6. 促進參與及合作",
    },
    description: {
      en: "Develop relationships and seek input from non-Chinese speaking community members, leaders, and organisations. Helps to better understand the community's needs, strengths, and challenges, and informs the development and delivery of culturally responsive services.",
      "zh-hant":
        "與非華語社群的成員、領袖和組織建立聯繫並尋求他們的意見，有助於深入了解社群的需要、優勢及面對的挑戰，從而為發展具文化回應的服務提供寶貴參考。",
    },
    questions: [
      {
        id: "engagement_1",
        statement: {
          en: "I possess the knowledge and skills to establish and foster positive and appropriate relationships with non-Chinese speaking individuals.",
          "zh-hant": "我具備知識和技巧，能夠與非華語人士培養並建立正面且合宜的關係。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "engagement_2",
        statement: {
          en: "I actively seek information from the service user's family members or other key community informants to address the needs and preferences of non-Chinese speaking service users.",
          "zh-hant":
            "我積極向服務使用者的家庭成員或其他重要社區資訊提供者尋求意見，以便更好地應對非華語服務使用者的需要及其在服務上的偏好。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "engagement_3",
        statement: {
          en: "I advocate for my service unit to actively pursue formal and informal partnerships with non-Chinese speaking community groups and service users to improve the services.",
          "zh-hant": "我提倡我的服務單位積極與非華語社群團體和服務使用者建立正式和非正式夥伴關係，以改善服務。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "engagement_4",
        statement: {
          en: "I take proactive measures to implement strategies that encourage participation through consultation and collaboration with non-Chinese speaking individuals, families or community members.",
          "zh-hant": "我主動地實施策略，透過與非華語人士、家庭或社群成員進行協商與合作，鼓勵他們參與服務。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "engagement_5",
        statement: {
          en: "I advocate for my service unit to engage people from a range of communities with different cultural backgrounds to inform the provision of culturally appropriate services.",
          "zh-hant": "我提倡我的服務單位積極接觸和聯繫多元文化背景的社群，讓他們了解我們提供具文化適切性的服務。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "engagement_6",
        statement: {
          en: "I advocate for my service unit to engage people from a range of communities with different cultural backgrounds to provide feedback on current services.",
          "zh-hant": "我提倡我的服務單位積極接觸和聯繫多元文化背景的社群，讓他們對現有服務提出意見。",
        },
        options: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 7,
    title: {
      en: "7. Empowerment",
      "zh-hant": "7. 賦權",
    },
    description: {
      en: "Empowerment recognises different cultural strengths, assets, and expertise. The service provider will help different cultures to build the capacity to address their own needs and goals.",
      "zh-hant":
        "賦權是認同不同文化的優勢、資產和專長。服務提供者能協助不同文化服務使用者建立滿足他們自身需要和目標的能力。",
    },
    questions: [
      {
        id: "empowerment_1",
        statement: {
          en: "I advocate for including the opinions of non-Chinese speaking service users in the service decision-making process and service delivery.",
          "zh-hant": "我提倡在服務決策過程和服務中加入非華語服務使用者的意見。",
        },
        options: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 8,
    title: {
      en: "8. Commitment to ongoing learning and improvement",
      "zh-hant": "8. 致力持續學習和改進",
    },
    description: {
      en: "Committed to ongoing professional development, staying informed about cultural trends and best practices, and seeking feedback from individuals and communities served to better understand different experiences and identify areas for improvement.",
      "zh-hant":
        "致力於持續的專業發展，了解文化趨勢和最佳服務實踐方法，並尋求個人和社區的意見，以便更好地理解不同的經驗，確定需要改進的領域。",
    },
    questions: [
      {
        id: "learning_1",
        statement: {
          en: "I continue to develop my capacity for assessing areas where there are gaps in my knowledge.",
          "zh-hant": "我持續提升評估自身知識不足之處的能力。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "learning_2",
        statement: {
          en: "I keep professional development and training to enhance my knowledge and skills in the provision of services to support non-Chinese speaking groups.",
          "zh-hant": "我會持續進行專業發展和培訓，以提高我對非華語社群提供服務的知識和技能。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "learning_3",
        statement: {
          en: "I keep updated on my knowledge about the policies, social problems, concerns and issues of the non-Chinese speaking service user populations.",
          "zh-hant": "我會持續了解非華語服務使用者社群相關的政策、社會問題、關注事項和議題。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "learning_4",
        statement: {
          en: "I consult with my non-Chinese speaking staff about culturally respectful and appropriate action.",
          "zh-hant": "我會諮詢非華語員工如何達致尊重文化且合宜的行為。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "learning_5",
        statement: {
          en: "I am actively learning and implementing the specific culture and practices that are essential for my work.",
          "zh-hant": "我積極地學習和實踐對我工作有重要性的特定文化和文化習俗。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "learning_6",
        statement: {
          en: "I commit to creating opportunities to expand my understanding of diverse cultures.",
          "zh-hant": "我致力創造機會來擴展我對多元文化的理解。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "learning_7",
        statement: {
          en: "I seek feedback from service users and other stakeholders to enhance my approach when working with non-Chinese speaking individuals.",
          "zh-hant": "當我提供服務予非華語服務使用者時，我會尋求服務使用者和其他持份者的意見，以改進我的服務介入手法。",
        },
        options: ["1", "2", "3", "4"],
      },
    ],
  },
  {
    id: 9,
    title: {
      en: "9. Incorporating Funds of Knowledge (FoK)",
      "zh-hant": "9. 結合家庭知識庫藏",
    },
    description: {
      en: "Incorporating Funds of Knowledge (FoK) involves recognising and valuing the rich reservoir of knowledge and resources that non-Chinese speaking individuals and communities possess. By tapping into their existing cultural heritage, family traditions, community practices and life experiences, a more culturally responsive and engaging environment can be created in the social service sector.",
      "zh-hant":
        "結合家庭知識庫藏（FoK）指認識、認同和重視非華語人士和社群擁有的豐富知識和資源。在服務中連繫他們已有的文化習俗、家庭傳統、社群習慣和生活經驗，營造更具文化回應及互動的服務環境。",
    },
    questions: [
      {
        id: "fok_1",
        statement: {
          en: "I possess the Funds of Knowledge and understand the traditional family practices of various cultural groups residing in the local community.",
          "zh-hant": "我擁有家庭知識庫藏，了解社區上各文化社群的傳統家庭習俗。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "fok_2",
        statement: {
          en: "I continue to gather information regarding the non-Chinese speaking service user's background knowledge and life experiences.",
          "zh-hant": "我會持續收集有關非華語服務使用者的知識和生活經驗的資訊。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "fok_3",
        statement: {
          en: "I encourage my service users to share and gain their knowledge, traditions and experiences of different cultures.",
          "zh-hant": "我鼓勵我的服務使用者分享不同文化的知識、傳統和經驗。",
        },
        options: ["1", "2", "3", "4"],
      },
      {
        id: "fok_4",
        statement: {
          en: "I can systematically document and organise the knowledge, skills and life experience that non-Chinese speaking individuals and families bring to the services.",
          "zh-hant": "我可以有系統地紀錄和整理由非華語人士和家庭為服務帶來的知識、技能和生活經驗。",
        },
        options: ["1", "2", "3", "4"],
      },
    ],
    references: [
      "Giordano, G., & Edwards, J. (2023). Enhancing Cultural Responsiveness in Social Service Agencies, OPRE Report # 2023-338. Prepared by Insight Policy Research. Washington, DC: U.S. Department of Health and Human Services, Administration for Children and Families, Office of Planning, Research, and Evaluation.",
      `Access and Capacity-building Team of the Health Equity and Access Unit, Metro South Hospital & Health Service, Queensland Health, Australia. (2016). (publication). Providing culturally responsive dietetic services: A self assessment tool for clinicians. Retrieved March 6, 2024, from https://metrosouth.
health.qld.gov.au/sites/default/files/content/heau-clinician-assess-
tool.pdf .`,
      `American Speech-Language-Hearing Association. (2021). Cultural Competence Check-in: Culturally Responsive Practice. Retrieved March 6, 2024, from
https://www.asha.org/siteassets/uploadedfiles/
multicultural/culturally-responsive-practice-
checklist.pdf.`,
      `AVMA American Veterinary Medical Association. (n.d.-a). Cultural competence self-assessment.
Retrieved March 6, 2024, from
https://www.avma.org/sites/default/files/202202/DiversityCulturalCompetence
Checklist.pdf.`,
      "Esther Calzada and Yolanda Suarez-Balcazar (2014). Enhancing Cultural Competence in Social Service Agencies: A Promising Approach to Serving Diverse Children and Families, OPRE Report #2014-31, Washington, DC: Office of Planning, Research and Evaluation, Administration for Children and Families, U.S. Department of Health and Human Services.",
      `Educational Service Center of Northeast Ohio. (n.d.). Culturally responsive observation checklist.
Retrieved March 6, 2024, from
https://www.escneo.org/Downloads/EC%20%20Culturally%20Responsive%20
Observation%20Checklist.pdf.`,
      "Jockey Club Community Sustainability Fund, AFS Youth Intercultural Online Learning Project. (2021). (rep.). Impact of Intercultural Learning on Youth in Hong Kong (pp. 1--9). Hong Kong.",
      `Metro South Hospital and Health Service, the State of Queensland. (2018). (rep.). Providing culturally responsive dietetic services: An organisational assessment tool. Retrieved March 6, 2024, from
https://metrosouth.health.qld.gov.au/sites/default/files/content/dietetic_organisational_assessme
nt_tool.pdf.`,
      `MPHI and the Implementation Group. (2019, June). Is My Implementation Practice Culturally Responsive. Retrieved March 6, 2024, from
https://nirn.fpg.unc.edu/sites/nirn.fpg.unc.edu/files/imce/documents/IS
%20Self%20Assessment.pdf.`,
      `Multicultural NSW, GUIDE: The importance of culturally responsive service delivery (2022).
Retrieved March 6, 2024, from https://multicultural.nsw.gov.au/wp-
content/uploads/2022/11/S3-GUIDE-Importance-of-cultural-diversity-in-service-delivery.pdf.`,
      "Multicultural NSW, Multicultural Policies and Services Program (MPSP) (2023). Retrieved March 6, 2024, from Multicultural Policies and Services Program (nsw.gov.au).",
      `Multicultural NSW, TOOL: Servicing culturally diverse service users checklist. Retrieved March 6, 2024, from
https://multicultural.nsw.gov.au/wp-content/uploads/2022/11/S1-TOOL-Servicing-
culturally-diverse-service users-checklist.pdf.`,
      `National Association of School Psychologists (NASP). (n.d.-b). NASP 2020 domains of Practice. Retrieved March 6, 2024, from
https://www.nasponline.org/standards-and-certification/nasp-
2020-professional-standards-adopted/nasp-2020-domains-of-practice`,
      `National Association of School Psychologists (NASP). (n.d.-c).
Self-Assessment Checklist for Personnel Providing Services and
Supports to Children and their Families. Retrieved March 6, 2024, from
https://www.nasponline.org/resources-and-publications/resources-and-
podcasts/diversity-and-social-justice/cultural-responsiveness/self-assessment-checklist.`,
      `New America. (2020, September 23). Culturally responsive teaching: A reflection guide. Retrieved March 6, 2024, from
https://www.newamerica.org/education-policy/policy-papers/culturally-
responsiveteaching-competencies/.`,
      `No time for flash cards. (2023, June 1). How to use funds of knowledge in your classroom and create better connections. Retrieved March 6, 2024, from
https://www.notimeforflashcards.com/2018/02/funds-of-knowledge.html.`,
      `Optometry Australia. (2021, June). Self-reflection checklist: Cultural responsiveness. Retrieved March 6, 2024, from
https://www.optometry.org.au/wp-
content/uploads/Professional_support/OACALDFrame
work-Self-reflection-checklist- designed_Final-2021.pdf.`,
      `The Arizona Speech-Language-Hearing Association: ArSHA. (2021).
Culturally Responsive Service Delivery Guide. Retrieved March 6, 2024,
from http://www.arsha.org/documents/ArSHA_CLD_
Culturally_Responsive_Service_Delivery_Check_List_2021.pdf.`,
      `The State of Queensland (Metro South Hospital and Health Service). (2018). Providing culturally responsive dietetic services: An organisational assessment tool. Retrieved March 6, 2024, from
https://metrosouth.
health.qld.gov.au/sites/default/files/content/providing_culturally_responsive_dietetic_services.pd
f.`,
      `U.S. Department of Health and Human Services, Substance Abuse and
Mental Health Services Administration, Center for Substance Abuse
Treatment. (2014). In Improving cultural competence (Vol. 59, Ser.
Treatment Improvement Protocol (TIP)). essay.`,
      `Wisconsin RtI Center, Wisconsin Department of Public Instruction,
Disproportionality Technical Assistance Network. (2017). (rep.). que:
Wisconsin's Model to Inform Culturally Responsive Practices.
Retrieved March 6, 2024, from
https://dpi.wi.gov/sites/default/files/imce/statesupt/pdf/WI_Model_Inform_CRPs_2019.pdf.`,
    ],
  },
];
