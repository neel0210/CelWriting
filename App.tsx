import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { BookOpen, PenTool, CheckCircle, AlertCircle, Menu, X, Home } from 'lucide-react';
import { QUESTIONS } from './data/questions';
import { Question, TaskType, EvaluationResult } from './types';
import { evaluateWriting } from './services/geminiService';

// --- Components ---

const Header = () => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <Link to="/" className="flex items-center gap-2 text-decoration-none">
          <div className="bg-blue-600 p-2 rounded-lg">
            <PenTool className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 hidden sm:block">CELPIP AI Simulator</span>
        </Link>
        <nav className="flex space-x-4">
           <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
           <Link to="/custom" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Custom Topic</Link>
        </nav>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 mt-auto">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CELPIP AI Simulator. Not affiliated with Paragon Testing Enterprises.
      </p>
    </div>
  </footer>
);

const QuestionCard = ({ question, onSelect }: { question: Question; onSelect: (q: Question) => void }) => (
  <div 
    onClick={() => onSelect(question)}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 cursor-pointer transition-all duration-200 group"
  >
    <div className="flex justify-between items-start mb-4">
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${question.type === TaskType.TASK_1 ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
        {question.type === TaskType.TASK_1 ? 'Task 1: Email' : 'Task 2: Survey'}
      </span>
      <span className="text-gray-400 group-hover:text-blue-500">
        <PenTool className="h-4 w-4" />
      </span>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">{question.title}</h3>
    <p className="text-sm text-gray-500 line-clamp-2">{question.prompt}</p>
  </div>
);

// --- Pages ---

const Dashboard = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'ALL' | 'TASK_1' | 'TASK_2'>('ALL');

  const filteredQuestions = QUESTIONS.filter(q => {
    if (filter === 'ALL') return true;
    return filter === 'TASK_1' ? q.type === TaskType.TASK_1 : q.type === TaskType.TASK_2;
  });

  const handleSelect = (q: Question) => {
    navigate(`/exam/${q.id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Master Your CELPIP Writing</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Practice with 50+ real exam questions. Get instant AI grading and feedback to improve your band score.
        </p>
      </div>

      <div className="flex justify-center mb-8 gap-2">
        {(['ALL', 'TASK_1', 'TASK_2'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {f === 'ALL' ? 'All Questions' : f === 'TASK_1' ? 'Task 1 (Email)' : 'Task 2 (Survey)'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuestions.map(q => (
          <QuestionCard key={q.id} question={q} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

const CustomTopic = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const [type, setType] = useState<TaskType>(TaskType.TASK_1);
  
  // Custom fields
  const [bullets, setBullets] = useState(['', '', '']);
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');

  const handleStart = () => {
    if (!title || !prompt) return;
    
    // Validate extra fields
    if (type === TaskType.TASK_1 && bullets.some(b => !b.trim())) {
      alert("Please fill in all bullet points for Task 1.");
      return;
    }
    if (type === TaskType.TASK_2 && (!optionA.trim() || !optionB.trim())) {
      alert("Please fill in both options for Task 2.");
      return;
    }

    const customQ: Question = {
      id: 'custom-' + Date.now(),
      title,
      prompt,
      type,
      bullets: type === TaskType.TASK_1 ? bullets : undefined,
      options: type === TaskType.TASK_2 ? { optionA, optionB } : undefined
    };
    
    navigate('/exam/custom', { state: { question: customQ } });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Custom Topic</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Task Type</label>
            <div className="flex gap-4">
              <button 
                onClick={() => setType(TaskType.TASK_1)}
                className={`flex-1 py-3 rounded-lg border text-sm font-medium ${type === TaskType.TASK_1 ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                Task 1: Email
              </button>
              <button 
                onClick={() => setType(TaskType.TASK_2)}
                className={`flex-1 py-3 rounded-lg border text-sm font-medium ${type === TaskType.TASK_2 ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                Task 2: Survey
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Topic Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g., Late for Meeting"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {type === TaskType.TASK_1 ? 'Situation Description' : 'Survey Question / Context'}
            </label>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={type === TaskType.TASK_1 ? "Describe the situation..." : "Describe the survey context..."}
            />
          </div>

          {type === TaskType.TASK_1 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Required Bullet Points</label>
              <div className="space-y-3">
                {bullets.map((b, i) => (
                  <input 
                    key={i}
                    type="text"
                    value={b}
                    onChange={(e) => {
                      const newBullets = [...bullets];
                      newBullets[i] = e.target.value;
                      setBullets(newBullets);
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Bullet point ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {type === TaskType.TASK_2 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Survey Options</label>
              <div className="space-y-3">
                 <div>
                   <span className="text-xs text-gray-500 mb-1 block">Option A</span>
                   <input 
                    type="text"
                    value={optionA}
                    onChange={(e) => setOptionA(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Option A description"
                  />
                 </div>
                 <div>
                   <span className="text-xs text-gray-500 mb-1 block">Option B</span>
                   <input 
                    type="text"
                    value={optionB}
                    onChange={(e) => setOptionB(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Option B description"
                  />
                 </div>
              </div>
            </div>
          )}

          <button 
            onClick={handleStart}
            disabled={!title || !prompt}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Start Practice
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Exam Interface ---

const ExamSimulator = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Resolve question
  let question: Question | undefined;
  if (id === 'custom') {
    question = location.state?.question;
  } else {
    question = QUESTIONS.find(q => q.id === id);
  }

  const [response, setResponse] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(question?.type === TaskType.TASK_1 ? 27 * 60 : 26 * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (!question) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [question]);

  if (!question) {
    return <Navigate to="/" />;
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setResponse(text);
    const words = text.trim().split(/\s+/);
    setWordCount(text.trim() === '' ? 0 : words.length);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSubmit = async () => {
    if (!question) return;
    setIsSubmitting(true);
    try {
      const result = await evaluateWriting(question, response);
      navigate('/result', { state: { result, question, userResponse: response } });
    } catch (error) {
      alert("Failed to evaluate. Please try again or check your API Key configuration.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-gray-100">
      {/* Exam Toolbar */}
      <div className="bg-blue-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-lg">{question.type === TaskType.TASK_1 ? 'Task 1' : 'Task 2'}</span>
          <span className="text-blue-200 text-sm">Writing Test</span>
        </div>
        <div className="font-mono text-xl font-bold bg-blue-900 px-4 py-1 rounded">
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel: Prompt */}
        <div className="w-1/2 p-8 overflow-y-auto bg-white border-r border-gray-200">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-6">{question.title}</h2>
            <div className="prose text-gray-700">
              <p className="mb-6 text-lg">{question.prompt}</p>
              
              {question.type === TaskType.TASK_1 && question.bullets && (
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-3">In your email, you must:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-blue-800">
                    {question.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              )}

              {question.type === TaskType.TASK_2 && question.options && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Option A:</span>
                    <span className="text-gray-700">{question.options.optionA}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <span className="font-bold text-gray-900 block mb-1">Option B:</span>
                    <span className="text-gray-700">{question.options.optionB}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel: Editor */}
        <div className="w-1/2 flex flex-col bg-gray-50">
          <textarea
            className="flex-1 p-8 text-lg font-sans resize-none focus:outline-none bg-white m-4 rounded-xl shadow-sm border border-gray-200 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Start typing your response here..."
            value={response}
            onChange={handleTextChange}
            spellCheck={false}
          />
          <div className="bg-white px-6 py-4 border-t border-gray-200 flex justify-between items-center">
            <div className={`text-sm font-medium ${wordCount < 150 || wordCount > 200 ? 'text-amber-600' : 'text-green-600'}`}>
              Word Count: {wordCount} / 200
            </div>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || wordCount < 10}
              className="bg-blue-600 text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              {isSubmitting ? 'Evaluating...' : 'Submit & Evaluate'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Result Page ---

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, question, userResponse } = location.state as { result: EvaluationResult, question: Question, userResponse: string } || {};

  if (!result) return <Navigate to="/" />;

  const getScoreColor = (score: number) => {
    if (score >= 10) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 7) return 'text-blue-600 bg-blue-50 border-blue-200';
    return 'text-amber-600 bg-amber-50 border-amber-200';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Evaluation Report</h1>
        <button onClick={() => navigate('/')} className="text-blue-600 hover:underline flex items-center gap-2">
          <Home className="w-4 h-4" /> Return Home
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Scores */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
            <h2 className="text-gray-500 font-medium mb-2">Overall Band Score</h2>
            <div className={`text-6xl font-extrabold mb-4 inline-block px-6 py-2 rounded-xl border-2 ${getScoreColor(result.bandScore)}`}>
              {result.bandScore}
            </div>
            <p className="text-sm text-gray-400">Range: 1-12</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Detailed Breakdown</h3>
            <div className="space-y-4">
              {[
                { label: 'Content & Coherence', score: result.contentScore },
                { label: 'Vocabulary', score: result.vocabularyScore },
                { label: 'Readability (Grammar)', score: result.grammarScore },
                { label: 'Task Fulfillment', score: result.taskFulfillmentScore },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium text-gray-900">{item.score}/12</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full" 
                      style={{ width: `${(item.score / 12) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column: Feedback */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5" /> Examiner Feedback
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{result.feedback}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
               <h4 className="font-bold text-green-800 mb-3">Strengths</h4>
               <ul className="list-disc pl-5 space-y-2 text-green-700 text-sm">
                 {result.strengths.map((s, i) => <li key={i}>{s}</li>)}
               </ul>
             </div>
             <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
               <h4 className="font-bold text-amber-800 mb-3">Weaknesses & Improvements</h4>
               <ul className="list-disc pl-5 space-y-2 text-amber-700 text-sm">
                 {result.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
               </ul>
             </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Corrected / Improved Version</h3>
            <div className="bg-gray-50 p-6 rounded-xl text-gray-800 font-serif italic border-l-4 border-blue-500">
              {result.correctedVersion}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/custom" element={<CustomTopic />} />
            <Route path="/exam/:id" element={<ExamSimulator />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;