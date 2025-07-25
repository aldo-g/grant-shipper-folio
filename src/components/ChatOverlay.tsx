import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface ConversationItem {
  id: string;
  text: string;
  type: 'welcome' | 'user' | 'bot';
  timestamp: Date;
}

interface ChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  isFirstTime?: boolean;
}

const WELCOME_MESSAGE = `Hey! I'm Alastair, thank you for visiting my web page. As a little project to test out my GenAI skills I made a chatbot, based off my past experience, and integrated agents to control the website, and show you content that you're interested in. If you want to have a try just ask your question here. If you ask to see other LLM projects, or projects I made with a certain tech, it will show you the relevant projects. Otherwise if you just ask about my previous experience it will answer your questions.

I hope you enjoy!`;

export const ChatOverlay = ({ isOpen, onClose, isFirstTime = false }: ChatOverlayProps) => {
  const [inputValue, setInputValue] = useState("");
  const [welcomeText, setWelcomeText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [hasShownWelcome, setHasShownWelcome] = useState(false);
  const [conversation, setConversation] = useState<ConversationItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const conversationEndRef = useRef<HTMLDivElement>(null);
  const conversationAreaRef = useRef<HTMLDivElement>(null);

  // Stream welcome message when first opened
  useEffect(() => {
    if (isOpen && isFirstTime && !hasShownWelcome) {
      setShowWelcome(true);
      setHasShownWelcome(true);
      
      // Start streaming after a brief delay
      setTimeout(() => {
        streamWelcomeMessage();
      }, 500);
    }
  }, [isOpen, isFirstTime, hasShownWelcome]);

  // Auto-scroll to bottom when conversation updates
  useEffect(() => {
    conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  // Auto-scroll conversation area when it updates
  useEffect(() => {
    if (conversationAreaRef.current) {
      conversationAreaRef.current.scrollTop = conversationAreaRef.current.scrollHeight;
    }
  }, [conversation, welcomeText]);

  // Focus input when opened (but not during first-time welcome)
  useEffect(() => {
    if (isOpen && inputRef.current && !isFirstTime && !isStreaming) {
      inputRef.current.focus();
    }
  }, [isOpen, isFirstTime, isStreaming]);

  const streamWelcomeMessage = () => {
    setIsStreaming(true);
    let currentText = "";
    let charIndex = 0;
    
    const streamInterval = setInterval(() => {
      if (charIndex < WELCOME_MESSAGE.length) {
        currentText += WELCOME_MESSAGE[charIndex];
        charIndex++;
        setWelcomeText(currentText);
      } else {
        // Finished streaming
        setIsStreaming(false);
        clearInterval(streamInterval);
        
        // Focus input after welcome message is done
        setTimeout(() => {
          inputRef.current?.focus();
        }, 300);
      }
    }, 20); // Adjust speed as needed
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message to conversation
    const userItem: ConversationItem = {
      id: Date.now().toString(),
      text: inputValue,
      type: 'user',
      timestamp: new Date()
    };

    setConversation(prev => [...prev, userItem]);
    setInputValue("");
    
    // Add bot response after a short delay
    setTimeout(() => {
      const botItem: ConversationItem = {
        id: (Date.now() + 1).toString(),
        text: "this is a test message.",
        type: 'bot',
        timestamp: new Date()
      };
      setConversation(prev => [...prev, botItem]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const hasConversation = conversation.length > 0;

  return (
    <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-5/6 max-w-4xl transition-all duration-500 ease-out ${
      isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
    }`}>
      {(showWelcome || hasConversation) ? (
        // Connected conversation and input bar
        <div className={`bg-card backdrop-blur-md border border-border/70 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ${
          hasConversation ? 'max-h-72' : 'max-h-none'
        }`}>
          {/* Conversation Area */}
          <div className={`${hasConversation ? 'max-h-56 overflow-y-auto' : ''}`} ref={conversationAreaRef}>
            <div className="p-6">
              {/* Welcome Message */}
              {showWelcome && (
                <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {welcomeText}
                  {isStreaming && (
                    <span className="inline-block w-2 h-4 ml-1 bg-current animate-pulse" />
                  )}
                </div>
              )}
              
              {/* Conversation Items */}
              {conversation.map((item, index) => (
                <div key={item.id} className={`${index > 0 || showWelcome ? 'mt-4' : ''}`}>
                  {item.type === 'user' ? (
                    // User message as minimal text with subtle styling
                    <div className={`${showWelcome || index > 0 ? 'pt-4 border-t border-border/20' : ''}`}>
                      <div className="text-foreground leading-relaxed whitespace-pre-wrap font-medium">
                        {item.text}
                      </div>
                    </div>
                  ) : (
                    // Bot response as plain text with divider
                    <div className={`${showWelcome || index > 0 ? 'pt-4 border-t border-border/20' : ''}`}>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                        {item.text}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={conversationEndRef} />
            </div>
          </div>
          
          {/* Input Bar */}
          <div className="h-12 flex items-center px-6 border-t border-border/30">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Alastair's work..."
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-muted-foreground/60"
            />
          </div>
        </div>
      ) : (
        // Just the input bar when no welcome message
        <div 
          className="h-12 bg-card backdrop-blur-md border border-border/70 rounded-full shadow-2xl flex items-center px-6"
          style={{
            transformOrigin: 'center bottom',
          }}
        >
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about Alastair's work..."
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm placeholder:text-muted-foreground/60"
          />
        </div>
      )}
    </div>
  );
};