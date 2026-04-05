import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBasket, Gift, Gamepad2, Laugh, BookOpen, Timer, X, ChevronRight, Check, RefreshCw, Palette, Target } from 'lucide-react';
import { PRODUCTS, MEMES, RECIPES, QUIZ_QUESTIONS } from './constants';
import { Product, Meme, Recipe, QuizQuestion, EggDesign } from './types';

// --- UI Components ---

const SectionHeading = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-nunito"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-slate-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants = {
    primary: 'bg-pastel-blue hover:bg-blue-200 text-blue-900',
    secondary: 'bg-pastel-pink hover:bg-pink-200 text-pink-900',
    outline: 'border-2 border-slate-200 hover:border-slate-300 text-slate-700',
    ghost: 'hover:bg-slate-100 text-slate-600'
  };
  return (
    <button 
      className={`px-6 py-3 rounded-full font-semibold transition-all active:scale-95 flex items-center justify-center gap-2 ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Sections ---

const Hero = () => (
  <section className="relative overflow-hidden bg-pastel-blue/20 section-padding min-h-[80vh] flex items-center">
    <div className="container-custom relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 font-nunito leading-tight">
            Happy Easter… <br />
            <span className="text-blue-600">but stay alert 👀</span>
          </h1>
          <div className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            <p className="mb-4">
              This bunny isn’t here for vibes… <br />
              it’s here for your eggs 🥚😄
            </p>
            <p>
              Play the games, grab the rewards, <br />
              and maybe… keep your basket safe.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit mx-auto lg:mx-0"
          >
            <Button className="text-lg px-10 py-4 shadow-md bg-blue-500 text-white hover:bg-blue-600">
              Start the Hunt
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="relative group max-w-md w-full">
            <div className="absolute -inset-2 bg-pastel-pink rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <motion.img 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              src="input_file_0.png" 
              alt="Easter Bunny Meme" 
              className="relative w-full h-auto rounded-[2rem] shadow-2xl object-cover border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const MemeSection = () => (
  <section className="section-padding bg-white" id="memes">
    <div className="container-custom">
      <SectionHeading 
        title="Easter Meme Central 😂" 
        subtitle="Because Easter is better with a side of humor."
      />
      
      {/* GIF Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {MEMES.filter(m => m.type === 'gif').map((meme) => (
          <motion.div 
            key={meme.id}
            whileHover={{ scale: 1.05 }}
            className="relative group aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-sm"
          >
            <img src={meme.url} alt={meme.caption} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
              <p className="text-white text-sm font-medium">{meme.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {MEMES.filter(m => m.type === 'image').map((meme) => (
          <motion.div 
            key={meme.id}
            whileHover={{ scale: 1.05 }}
            className="relative group aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-sm"
          >
            <img src={meme.url} alt={meme.caption} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
              <p className="text-white text-sm font-medium">{meme.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- Games ---

const CrackTheEgg = () => {
  const [isCracked, setIsCracked] = useState(false);
  const [reward, setReward] = useState('');

  const crack = () => {
    if (isCracked) return;
    setIsCracked(true);
    const rewards = ['10% OFF Coupon!', 'Free Shipping!', 'Golden Egg Badge!', 'Virtual Bunny Hug!'];
    setReward(rewards[Math.floor(Math.random() * rewards.length)]);
  };

  return (
    <div className="glass-card p-8 flex flex-col items-center text-center h-full">
      <div className="mb-6 p-4 bg-pastel-pink rounded-full">
        <Gamepad2 className="text-pink-600" size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4 font-nunito">Crack the Egg</h3>
      <p className="text-slate-600 mb-8">Tap the egg to reveal your Easter surprise!</p>
      
      <div className="relative cursor-pointer" onClick={crack}>
        <motion.div
          animate={isCracked ? { rotate: [0, -10, 10, -10, 10, 0], scale: [1, 1.1, 1] } : {}}
          className="text-8xl mb-4"
        >
          {isCracked ? '🐣' : '🥚'}
        </motion.div>
        
        <AnimatePresence>
          {isCracked && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg font-bold"
            >
              {reward}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {isCracked && (
        <Button variant="ghost" onClick={() => setIsCracked(false)} className="mt-4">
          <RefreshCw size={16} /> Try Again
        </Button>
      )}
    </div>
  );
};

const EggDesigner = () => {
  const [design, setDesign] = useState<EggDesign>({ color: '#ffe4e6', pattern: 'none' });
  const colors = ['#ffe4e6', '#f3e8ff', '#e0f2fe', '#ecfdf5', '#fefce8'];
  const patterns = ['none', 'dots', 'stripes', 'zigzag'];

  return (
    <div className="glass-card p-8 flex flex-col h-full">
      <div className="mb-6 p-4 bg-pastel-mint rounded-full self-center">
        <Palette className="text-emerald-600" size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4 font-nunito text-center">Egg Designer</h3>
      
      <div className="flex-1 flex flex-col items-center justify-center mb-8">
        <div 
          className="w-32 h-44 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] shadow-inner relative overflow-hidden transition-colors duration-300"
          style={{ backgroundColor: design.color }}
        >
          {design.pattern === 'dots' && (
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #000 20%, transparent 20%)', backgroundSize: '20px 20px' }} />
          )}
          {design.pattern === 'stripes' && (
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }} />
          )}
          {design.pattern === 'zigzag' && (
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(135deg, #000 25%, transparent 25%), linear-gradient(225deg, #000 25%, transparent 25%)', backgroundSize: '20px 20px' }} />
          )}
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold mb-2">Pick a Color:</p>
          <div className="flex gap-2">
            {colors.map(c => (
              <button 
                key={c} 
                onClick={() => setDesign({ ...design, color: c })}
                className={`w-8 h-8 rounded-full border-2 ${design.color === c ? 'border-slate-800' : 'border-transparent'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold mb-2">Pick a Pattern:</p>
          <div className="flex flex-wrap gap-2">
            {patterns.map(p => (
              <button 
                key={p} 
                onClick={() => setDesign({ ...design, pattern: p })}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${design.pattern === p ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RabbitInHat = () => {
  const [found, setFound] = useState(false);
  const [hatPos, setHatPos] = useState(0);

  const tap = () => {
    if (found) return;
    if (Math.random() > 0.7) {
      setFound(true);
    } else {
      setHatPos(prev => (prev + 1) % 3);
    }
  };

  return (
    <div className="glass-card p-8 flex flex-col items-center text-center h-full">
      <div className="mb-6 p-4 bg-pastel-blue rounded-full">
        <Target className="text-blue-600" size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4 font-nunito">Rabbit in a Hat</h3>
      <p className="text-slate-600 mb-8">Tap the hat to find the hidden bunny!</p>
      
      <div className="relative cursor-pointer h-32 flex items-end justify-center w-full" onClick={tap}>
        <motion.div
          animate={{ x: hatPos * 20 - 20 }}
          className="text-6xl relative z-10"
        >
          🎩
        </motion.div>
        <AnimatePresence>
          {found && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: -60, opacity: 1 }}
              className="absolute text-5xl z-0"
            >
              🐰
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {found && (
        <div className="mt-4">
          <p className="text-green-600 font-bold mb-2">You found him! 🎉</p>
          <Button variant="ghost" onClick={() => setFound(false)}>
            <RefreshCw size={16} /> Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

const MemoryGame = () => {
  const [cards, setCards] = useState<{ id: number, emoji: string, flipped: boolean, solved: boolean }[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const emojis = ['🐰', '🥚', '🥕', '🐥', '🌸', '🍫'];

  useEffect(() => {
    const initialCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, i) => ({ id: i, emoji, flipped: false, solved: false }));
    setCards(initialCards);
  }, []);

  const flip = (id: number) => {
    if (flipped.length === 2 || cards[id].flipped || cards[id].solved) return;
    
    const newCards = [...cards];
    newCards[id].flipped = true;
    setCards(newCards);
    
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);
    
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        setTimeout(() => {
          const solvedCards = [...cards];
          solvedCards[first].solved = true;
          solvedCards[second].solved = true;
          setCards(solvedCards);
          setFlipped([]);
        }, 500);
      } else {
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[first].flipped = false;
          resetCards[second].flipped = false;
          setCards(resetCards);
          setFlipped([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="glass-card p-8 flex flex-col items-center text-center h-full">
      <div className="mb-6 p-4 bg-pastel-yellow rounded-full">
        <RefreshCw className="text-yellow-600" size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4 font-nunito">Memory Match</h3>
      <p className="text-slate-600 mb-8">Find the matching pairs to win!</p>
      
      <div className="grid grid-cols-4 gap-2 w-full max-w-[240px]">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            onClick={() => flip(card.id)}
            animate={{ rotateY: card.flipped || card.solved ? 180 : 0 }}
            className={`aspect-square rounded-lg cursor-pointer flex items-center justify-center text-2xl border-2 transition-colors ${card.solved ? 'bg-green-100 border-green-200' : 'bg-white border-slate-100'}`}
          >
            {(card.flipped || card.solved) ? (
              <span className="rotate-y-180">{card.emoji}</span>
            ) : (
              <span>❓</span>
            )}
          </motion.div>
        ))}
      </div>
      
      {cards.every(c => c.solved) && (
        <div className="mt-4">
          <p className="text-green-600 font-bold">You matched them all! 🌟</p>
          <Button variant="ghost" onClick={() => {
            const reset = [...cards].map(c => ({ ...c, flipped: false, solved: false })).sort(() => Math.random() - 0.5);
            setCards(reset);
          }} className="mt-2">
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

const GamesSection = () => (
  <section className="section-padding bg-pastel-lavender/20" id="games">
    <div className="container-custom">
      <SectionHeading 
        title="Easter Fun & Games 🎮" 
        subtitle="Interactive experiences for every bunny."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <CrackTheEgg />
        <EggDesigner />
        <RabbitInHat />
        <MemoryGame />
      </div>
    </div>
  </section>
);

// --- Shop ---

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 7); // 7 days from now
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target.getTime() - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl font-bold text-slate-800 border border-slate-100">
            {value}
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-2">{unit}</span>
        </div>
      ))}
    </div>
  );
};

const ShopSection = () => (
  <section className="section-padding bg-white" id="shop">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
        <div className="text-center md:text-left">
          <SectionHeading 
            title="Easter Basket Bundles 🛍️" 
            subtitle="Hand-picked treats for your celebration."
            centered={false}
          />
        </div>
        <div className="bg-pastel-yellow/50 p-6 rounded-3xl border border-yellow-100">
          <p className="text-sm font-bold text-yellow-800 uppercase tracking-widest mb-4 text-center">Easter Sale Ends In:</p>
          <CountdownTimer />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <motion.div 
            key={product.id}
            whileHover={{ y: -10 }}
            className="glass-card overflow-hidden group"
          >
            <div className="aspect-square overflow-hidden relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                {product.category}
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-bold mb-2 font-nunito">{product.name}</h4>
              <p className="text-2xl font-extrabold text-slate-900 mb-4">${product.price}</p>
              <Button className="w-full">View Bundle</Button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-8 font-nunito">Spring Picks for You</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Chocolate Eggs', 'Bunny Ears', 'Easter Decor', 'Spring Flowers'].map(tag => (
            <span key={tag} className="px-6 py-2 bg-slate-50 border border-slate-100 rounded-full text-slate-600 font-medium hover:bg-pastel-blue/20 cursor-pointer transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- Engagement ---

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentQuestion + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="glass-card p-8 h-full">
      <div className="mb-6 p-4 bg-pastel-yellow rounded-full w-fit mx-auto">
        <BookOpen className="text-yellow-600" size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-6 font-nunito text-center">Easter Quiz</h3>
      
      {!showResult ? (
        <div>
          <p className="text-sm text-slate-500 mb-2">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</p>
          <p className="text-lg font-bold mb-6">{QUIZ_QUESTIONS[currentQuestion].question}</p>
          <div className="space-y-3">
            {QUIZ_QUESTIONS[currentQuestion].options.map((opt, i) => (
              <button 
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full p-4 text-left rounded-xl border border-slate-100 hover:bg-pastel-blue/20 hover:border-blue-200 transition-all font-medium"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-5xl mb-4">🏆</div>
          <h4 className="text-2xl font-bold mb-2">Quiz Complete!</h4>
          <p className="text-slate-600 mb-6">You scored {score} out of {QUIZ_QUESTIONS.length}</p>
          <Button onClick={() => { setCurrentQuestion(0); setScore(0); setShowResult(false); }} className="mx-auto">
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
};

const EngagementSection = () => (
  <section className="section-padding bg-slate-50" id="engagement">
    <div className="container-custom">
      <SectionHeading 
        title="Easter Stories & More 📖" 
        subtitle="Get inspired with recipes, quizzes, and community fun."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RECIPES.map(recipe => (
              <div key={recipe.id} className="glass-card overflow-hidden flex flex-col">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 font-nunito">{recipe.title}</h4>
                  <p className="text-slate-600 mb-4">{recipe.description}</p>
                  <Button variant="ghost" className="p-0 hover:bg-transparent text-blue-600">Read Recipe <ChevronRight size={16} /></Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="glass-card p-8 bg-pastel-mint/30 border-emerald-100">
            <h4 className="text-2xl font-bold mb-4 font-nunito">UGC Contest: Share Your Moment</h4>
            <p className="text-slate-600 mb-8">Upload your best Easter egg design or bunny costume to win a $100 gift card!</p>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-sm">
                  <img src={`https://picsum.photos/seed/ugc${i}/200/200`} alt="User content" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <Button variant="secondary">Share Your Moment</Button>
          </div>
        </div>
        
        <div className="space-y-8">
          <Quiz />
          <div className="glass-card p-8 bg-pastel-blue/30 border-blue-100">
            <h4 className="text-xl font-bold mb-4 font-nunito">Digital Craft Kits</h4>
            <div className="space-y-4">
              {['Coloring Pages', 'Paper Bunny Mask', 'Egg Holders'].map(kit => (
                <div key={kit} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                  <span className="font-medium">{kit}</span>
                  <Button variant="ghost" className="p-2 h-auto"><Check size={16} className="text-green-500" /></Button>
                </div>
              ))}
            </div>
            <Button className="w-full mt-6">Download All</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Layout ---

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="container-custom py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-pastel-blue rounded-xl flex items-center justify-center text-2xl">🐰</div>
        <span className="text-xl font-extrabold font-nunito tracking-tight">Eggcelent</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="#memes" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Memes</a>
        <a href="#games" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Games</a>
        <a href="#shop" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Shop</a>
        <a href="#engagement" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Stories</a>
      </nav>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hidden sm:flex">Login</Button>
        <Button className="px-6 py-2 h-auto">Get Started</Button>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white py-16">
    <div className="container-custom">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-pastel-blue rounded-xl flex items-center justify-center text-2xl">🐰</div>
            <span className="text-2xl font-extrabold font-nunito tracking-tight">Eggcelent</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8">
            The ultimate Easter destination for fun, shopping, and community. Celebrate the season with us!
          </p>
          <div className="flex gap-4">
            {['Twitter', 'Instagram', 'Facebook', 'TikTok'].map(s => (
              <a key={s} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="sr-only">{s}</span>
                <div className="w-5 h-5 bg-slate-400 rounded-sm" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Easter Games</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Meme Gallery</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gift Bundles</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Recipes</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2026 Eggcelent Easter. All rights reserved. No bunnies were harmed in the making of this website.</p>
      </div>
    </div>
  </footer>
);

const EggHunt = () => {
  const [foundCount, setFoundCount] = useState(0);
  const [eggs, setEggs] = useState<{ id: number, top: number, left: number, found: boolean }[]>([]);

  useEffect(() => {
    const newEggs = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      found: false
    }));
    setEggs(newEggs);
  }, []);

  const findEgg = (id: number) => {
    setEggs(prev => prev.map(e => e.id === id ? { ...e, found: true } : e));
    setFoundCount(prev => prev + 1);
  };

  return (
    <>
      {eggs.map(egg => !egg.found && (
        <motion.div
          key={egg.id}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => findEgg(egg.id)}
          className="fixed z-[100] cursor-pointer text-2xl select-none"
          style={{ top: `${egg.top}%`, left: `${egg.left}%` }}
        >
          🥚
        </motion.div>
      ))}
      
      <AnimatePresence>
        {foundCount > 0 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-8 right-8 z-[110] bg-white shadow-xl rounded-2xl p-4 border-2 border-pastel-blue flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-pastel-blue rounded-full flex items-center justify-center text-xl">🥚</div>
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Egg Hunt Progress</p>
              <p className="font-bold">{foundCount} / 5 Eggs Found</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-10 max-w-md w-full relative overflow-hidden"
      >
        <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>
        <div className="text-center">
          <div className="text-6xl mb-6">🐰</div>
          <h3 className="text-3xl font-bold mb-4 font-nunito">Don't Hop Away!</h3>
          <p className="text-slate-600 mb-8">Get 15% OFF your first Easter Bundle when you sign up for our newsletter.</p>
          <div className="space-y-4">
            <input type="email" placeholder="Enter your email" className="w-full px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <Button className="w-full py-4 text-lg">Claim My Discount</Button>
          </div>
          <p className="text-xs text-slate-400 mt-6 italic">No spam, just egg-cellent deals.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MemeSection />
        <GamesSection />
        <ShopSection />
        <EngagementSection />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
