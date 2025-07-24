import { MessageCircle, X } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const ChatButton = ({ onClick, isOpen }: ChatButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-50
        h-16 w-16 rounded-full
        text-muted-foreground hover:text-foreground
        transition-all duration-200 ease-out
        hover:scale-110
        group
      `}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <div className="relative h-7 w-7 mx-auto">
        <MessageCircle 
          className={`h-7 w-7 absolute inset-0 transition-all duration-300 group-hover:scale-110 ${
            isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        <X 
          className={`h-7 w-7 absolute inset-0 transition-all duration-300 group-hover:scale-110 ${
            isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
          }`} 
        />
      </div>
    </button>
  );
};