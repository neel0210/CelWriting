import { Question, TaskType } from '../types';

export const QUESTIONS: Question[] = [
  // --- TASK 1: EMAILS ---
  {
    id: 't1-001',
    type: TaskType.TASK_1,
    title: 'Late for Work',
    prompt: 'You were late for work this morning and missed a meeting. Write an email to your manager.',
    bullets: [
      'Apologize for being late',
      'Explain the reason for your tardiness',
      'Suggest how you will make up for the missed time'
    ]
  },
  {
    id: 't1-002',
    type: TaskType.TASK_1,
    title: 'Damaged Item Delivery',
    prompt: 'You bought a computer online, but it arrived damaged. Write an email to the customer service department.',
    bullets: [
      'Give details of the purchase',
      'Describe the damage',
      'Explain what you want them to do'
    ]
  },
  {
    id: 't1-003',
    type: TaskType.TASK_1,
    title: 'Noise Complaint',
    prompt: 'Your neighbors play loud music late at night. Write an email to your landlord.',
    bullets: [
      'Describe the problem',
      'Explain how it affects you',
      'Ask the landlord to solve the issue'
    ]
  },
  {
    id: 't1-004',
    type: TaskType.TASK_1,
    title: 'Volunteering Information',
    prompt: 'You saw an advertisement for volunteers at a local hospital. Write an email to the hospital coordinator.',
    bullets: [
      'Ask for more information about the duties',
      'Explain why you want to volunteer',
      'Ask about the schedule requirements'
    ]
  },
  {
    id: 't1-005',
    type: TaskType.TASK_1,
    title: 'Gym Membership Cancellation',
    prompt: 'You want to cancel your gym membership because you are moving. Write an email to the gym manager.',
    bullets: [
      'State your membership details',
      'Explain why you are cancelling',
      'Ask about the cancellation fee or refund process'
    ]
  },
  {
    id: 't1-006',
    type: TaskType.TASK_1,
    title: 'Inviting a Friend to Dinner',
    prompt: 'You are organizing a dinner party for your birthday. Write an email to a friend inviting them.',
    bullets: [
      'Invite your friend',
      'Give details about the time and location',
      'Ask if they have any dietary restrictions'
    ]
  },
  {
    id: 't1-007',
    type: TaskType.TASK_1,
    title: 'Lost Item at Hotel',
    prompt: 'You stayed at a hotel last weekend and left your watch in the room. Write an email to the hotel manager.',
    bullets: [
      'Describe your stay (dates and room number)',
      'Describe the watch',
      'Ask them to send it to you if found'
    ]
  },
  {
    id: 't1-008',
    type: TaskType.TASK_1,
    title: 'Requesting Time Off',
    prompt: 'You need to take a week off work to attend a family wedding. Write an email to your supervisor.',
    bullets: [
      'Request the time off',
      'Explain the reason',
      'Explain how your work will be covered while you are away'
    ]
  },
  {
    id: 't1-009',
    type: TaskType.TASK_1,
    title: 'Feedback on Training',
    prompt: 'You recently attended a professional training session organized by your company. Write an email to the HR department.',
    bullets: [
      'Say what you liked about the training',
      'Suggest one improvement',
      'Ask when the next session will be held'
    ]
  },
  {
    id: 't1-010',
    type: TaskType.TASK_1,
    title: 'Library Fine Dispute',
    prompt: 'You received a fine from the library for a book you already returned. Write an email to the librarian.',
    bullets: [
      'Provide your library card details',
      'Explain when you returned the book',
      'Ask them to remove the fine'
    ]
  },
  {
    id: 't1-011',
    type: TaskType.TASK_1,
    title: 'Restaurant Reservation Change',
    prompt: 'You made a reservation for a large group at a restaurant but need to change the time. Write an email to the restaurant manager.',
    bullets: [
      'Remind them of your current reservation',
      'Explain the change you need',
      'Ask if they can accommodate the new time'
    ]
  },
  {
    id: 't1-012',
    type: TaskType.TASK_1,
    title: 'Neighbor\'s Dog Barking',
    prompt: 'Your neighbor’s dog barks all day while they are at work. Write an email to your neighbor.',
    bullets: [
      'Politely mention the issue',
      'Explain how it distracts you (e.g., you work from home)',
      'Suggest a solution'
    ]
  },
  {
    id: 't1-013',
    type: TaskType.TASK_1,
    title: 'Job Application Follow-up',
    prompt: 'You had a job interview last week and haven\'t heard back. Write an email to the hiring manager.',
    bullets: [
      'Thank them for the interview',
      'Reiterate your interest in the position',
      'Ask when a decision will be made'
    ]
  },
  {
    id: 't1-014',
    type: TaskType.TASK_1,
    title: 'Community Center Course',
    prompt: 'You want to suggest a new photography course at your local community center. Write an email to the director.',
    bullets: [
      'Suggest the course idea',
      'Explain why it would be popular',
      'Offer to help organize or teach it'
    ]
  },
  {
    id: 't1-015',
    type: TaskType.TASK_1,
    title: 'Apology to Friend',
    prompt: 'You forgot your friend\'s birthday yesterday. Write an email to your friend.',
    bullets: [
      'Apologize for forgetting',
      'Explain why you were busy/distracted',
      'Offer to take them out for lunch'
    ]
  },
  {
    id: 't1-016',
    type: TaskType.TASK_1,
    title: 'Broken Street Light',
    prompt: 'The street light outside your house has been broken for weeks. Write an email to the city council.',
    bullets: [
      'Report the location of the light',
      'Explain the safety concern',
      'Ask for it to be fixed urgently'
    ]
  },
  {
    id: 't1-017',
    type: TaskType.TASK_1,
    title: 'Incorrect Bill',
    prompt: 'You received an electricity bill that is much higher than usual. Write an email to the utility company.',
    bullets: [
      'State your account number',
      'Explain why you think the bill is wrong',
      'Request a review of the meter reading'
    ]
  },
  {
    id: 't1-018',
    type: TaskType.TASK_1,
    title: 'Declining an Invitation',
    prompt: 'Your coworker invited you to a party, but you cannot go. Write an email to your coworker.',
    bullets: [
      'Thank them for the invitation',
      'Explain why you cannot attend',
      'Wish them a good time'
    ]
  },
  {
    id: 't1-019',
    type: TaskType.TASK_1,
    title: 'School Bus Issue',
    prompt: 'The school bus has been arriving late to pick up your child. Write an email to the school principal.',
    bullets: [
      'Describe the problem',
      'Explain how this affects your schedule',
      'Ask for the issue to be addressed with the bus company'
    ]
  },
  {
    id: 't1-020',
    type: TaskType.TASK_1,
    title: 'Reviewing a Colleague',
    prompt: 'Your boss asked you to write feedback about a colleague you worked with on a project. Write an email to your boss.',
    bullets: [
      'Mention the project you worked on',
      'Describe the colleague’s strengths',
      'Mention one area for improvement'
    ]
  },
  {
    id: 't1-021',
    type: TaskType.TASK_1,
    title: 'Selling Used Furniture',
    prompt: 'You are selling a sofa online and a potential buyer emailed you. Write a reply.',
    bullets: [
      'Answer their questions about the condition',
      'Suggest a time for them to see it',
      'Mention the price is firm'
    ]
  },
  {
    id: 't1-022',
    type: TaskType.TASK_1,
    title: 'Hotel Booking Confirmation',
    prompt: 'You booked a hotel but haven’t received a confirmation email. Write to the hotel.',
    bullets: [
      'Provide your booking details',
      'Ask for the confirmation number',
      'Ask about parking availability'
    ]
  },
  {
    id: 't1-023',
    type: TaskType.TASK_1,
    title: 'Advice to New Neighbor',
    prompt: 'A new neighbor moved in and asked for advice on local schools. Write an email to them.',
    bullets: [
      'Welcome them to the neighborhood',
      'Recommend a specific school',
      'Explain why it is a good choice'
    ]
  },
  {
    id: 't1-024',
    type: TaskType.TASK_1,
    title: 'Internet Service Down',
    prompt: 'Your internet has been down for 24 hours. Write to your ISP.',
    bullets: [
      'Report the outage',
      'Explain how it impacts your work',
      'Ask for an estimated fix time and compensation'
    ]
  },
  {
    id: 't1-025',
    type: TaskType.TASK_1,
    title: 'Resignation Letter',
    prompt: 'You have found a new job and are resigning. Write an email to your manager.',
    bullets: [
      'State your last day of work',
      'Thank them for the opportunities',
      'Offer help during the transition'
    ]
  },

  // --- TASK 2: SURVEYS ---
  {
    id: 't2-001',
    type: TaskType.TASK_2,
    title: 'City Park Development',
    prompt: 'The city council is deciding how to use a vacant lot downtown. They are considering building a park or a shopping center.',
    options: {
      optionA: 'Build a public park: Green space, relaxation, free for everyone.',
      optionB: 'Build a shopping center: New jobs, economic growth, convenience.'
    }
  },
  {
    id: 't2-002',
    type: TaskType.TASK_2,
    title: 'Work from Home Policy',
    prompt: 'Your company is conducting a survey to decide on a future work policy. Choose the option you prefer and explain why.',
    options: {
      optionA: 'All employees must work from the office 5 days a week.',
      optionB: 'Employees can choose to work from home up to 3 days a week.'
    }
  },
  {
    id: 't2-003',
    type: TaskType.TASK_2,
    title: 'School Funding',
    prompt: 'Your local school board has received extra funding. They are asking parents how to spend it.',
    options: {
      optionA: 'Upgrade sports facilities and gym equipment.',
      optionB: 'Buy new computers and tablets for the library.'
    }
  },
  {
    id: 't2-004',
    type: TaskType.TASK_2,
    title: 'Performance Bonus',
    prompt: 'Your company wants to change how it rewards employees. Which option do you prefer?',
    options: {
      optionA: 'Give a small bonus to every employee at the end of the year.',
      optionB: 'Give a large bonus only to the top 10% of performers.'
    }
  },
  {
    id: 't2-005',
    type: TaskType.TASK_2,
    title: 'Traffic Control',
    prompt: 'The city is looking to reduce traffic congestion. They are proposing two solutions.',
    options: {
      optionA: 'Improve public transit (buses and trains) to encourage less driving.',
      optionB: 'Build more lanes on the highway to accommodate more cars.'
    }
  },
  {
    id: 't2-006',
    type: TaskType.TASK_2,
    title: 'Office Dress Code',
    prompt: 'Your manager is asking for opinions on the office dress code.',
    options: {
      optionA: 'Formal business attire (suits, ties) every day.',
      optionB: 'Casual dress code (jeans, t-shirts) allowed every day.'
    }
  },
  {
    id: 't2-007',
    type: TaskType.TASK_2,
    title: 'Store Hours',
    prompt: 'A local grocery store is considering changing its operating hours. The owner wants customer feedback.',
    options: {
      optionA: 'Open 24 hours a day, but with higher prices to cover costs.',
      optionB: 'Open 8 AM to 10 PM with current prices.'
    }
  },
  {
    id: 't2-008',
    type: TaskType.TASK_2,
    title: 'Employee Training',
    prompt: 'Your company has a budget for employee training. Which method is better?',
    options: {
      optionA: 'Hire external experts to come and give workshops.',
      optionB: 'Pay for employees to take online courses on their own time.'
    }
  },
  {
    id: 't2-009',
    type: TaskType.TASK_2,
    title: 'Public Art vs Roads',
    prompt: 'The city has a surplus budget. They are asking residents where to spend it.',
    options: {
      optionA: 'Commission new public art sculptures for the city center.',
      optionB: 'Repair potholes and repave old roads in residential areas.'
    }
  },
  {
    id: 't2-010',
    type: TaskType.TASK_2,
    title: 'Team Building Event',
    prompt: 'Your department is planning a team-building event. What do you prefer?',
    options: {
      optionA: 'An outdoor adventure activity (hiking, rafting).',
      optionB: 'A nice dinner at a luxury restaurant.'
    }
  },
  {
    id: 't2-011',
    type: TaskType.TASK_2,
    title: 'Apartment Pet Policy',
    prompt: 'Your apartment building management is reviewing the pet policy. They are surveying residents.',
    options: {
      optionA: 'Allow all pets, including large dogs.',
      optionB: 'Ban all pets to reduce noise and damage.'
    }
  },
  {
    id: 't2-012',
    type: TaskType.TASK_2,
    title: 'Company Cafeteria',
    prompt: 'The company cafeteria wants to change the menu. What is your preference?',
    options: {
      optionA: 'Offer mostly healthy, vegetarian, and organic options.',
      optionB: 'Offer classic comfort foods like burgers, pizza, and fries.'
    }
  },
  {
    id: 't2-013',
    type: TaskType.TASK_2,
    title: 'Children\'s TV Time',
    prompt: 'A research group is surveying parents about screen time limits for children.',
    options: {
      optionA: 'Strict limits: No more than 1 hour per day.',
      optionB: 'Flexible limits: Depends on the content and educational value.'
    }
  },
  {
    id: 't2-014',
    type: TaskType.TASK_2,
    title: 'Annual Company Party',
    prompt: 'Your company is planning the annual holiday party.',
    options: {
      optionA: 'A formal evening event with spouses/partners invited.',
      optionB: 'An informal lunch party during work hours for employees only.'
    }
  },
  {
    id: 't2-015',
    type: TaskType.TASK_2,
    title: 'Recycling Program',
    prompt: 'Your town wants to improve recycling. Which policy do you support?',
    options: {
      optionA: 'Fines for households that do not recycle properly.',
      optionB: 'Rewards (tax credits) for households that reduce waste significantly.'
    }
  },
  {
    id: 't2-016',
    type: TaskType.TASK_2,
    title: 'University Admissions',
    prompt: 'A university is changing its admission criteria.',
    options: {
      optionA: 'Admissions based solely on academic grades.',
      optionB: 'Admissions based on grades, volunteer work, and interviews.'
    }
  },
  {
    id: 't2-017',
    type: TaskType.TASK_2,
    title: 'Vacation Time',
    prompt: 'Your employer is offering a choice for vacation benefits.',
    options: {
      optionA: 'Three weeks of vacation with average pay.',
      optionB: 'Two weeks of vacation with a significant bonus payment.'
    }
  },
  {
    id: 't2-018',
    type: TaskType.TASK_2,
    title: 'Public Library Services',
    prompt: 'The library wants to modernize. What should they focus on?',
    options: {
      optionA: 'Expand the collection of physical books.',
      optionB: 'Create a digital media lab with 3D printers and software.'
    }
  },
  {
    id: 't2-019',
    type: TaskType.TASK_2,
    title: 'Retirement Age',
    prompt: 'The government is discussing the mandatory retirement age.',
    options: {
      optionA: 'Keep the retirement age at 65 to allow younger people to find jobs.',
      optionB: 'Raise the retirement age to 70 as people are living longer.'
    }
  },
  {
    id: 't2-020',
    type: TaskType.TASK_2,
    title: 'Charity Donation',
    prompt: 'Your company will donate to one charity. Employees must vote.',
    options: {
      optionA: 'A local animal shelter.',
      optionB: 'An international disaster relief fund.'
    }
  },
  {
    id: 't2-021',
    type: TaskType.TASK_2,
    title: 'Shopping Bags',
    prompt: 'The city wants to ban plastic bags. What do you think?',
    options: {
      optionA: 'Complete ban on plastic bags immediately.',
      optionB: 'Charge a small fee for plastic bags but keep them available.'
    }
  },
  {
    id: 't2-022',
    type: TaskType.TASK_2,
    title: 'Work Schedule',
    prompt: 'Your team can change its weekly schedule.',
    options: {
      optionA: 'Work 8 hours a day for 5 days (Monday-Friday).',
      optionB: 'Work 10 hours a day for 4 days (Monday-Thursday).'
    }
  },
  {
    id: 't2-023',
    type: TaskType.TASK_2,
    title: 'Video Surveillance',
    prompt: 'The city plans to install cameras in public parks for safety.',
    options: {
      optionA: 'Support the cameras to reduce crime.',
      optionB: 'Oppose the cameras to protect privacy.'
    }
  },
  {
    id: 't2-024',
    type: TaskType.TASK_2,
    title: 'Music in the Workplace',
    prompt: 'Your manager is asking if music should be played in the open office.',
    options: {
      optionA: 'Play background music to improve mood.',
      optionB: 'Keep the office silent to improve concentration.'
    }
  },
  {
    id: 't2-025',
    type: TaskType.TASK_2,
    title: 'Salary Transparency',
    prompt: 'Your company is considering making all salaries public within the company.',
    options: {
      optionA: 'Make salaries public to ensure fairness.',
      optionB: 'Keep salaries private to prevent jealousy and conflict.'
    }
  }
];

export const getRandomQuestions = (count: number) => {
  const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};