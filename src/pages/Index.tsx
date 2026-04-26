import { useState } from "react";
import {
  Brain,
  Shield,
  Zap,
  Eye,
  Clock,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  BookOpen,
  MessageCircle,
  Sparkles,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#7c3aed] rounded-full flex items-center justify-center">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">ПсихоИИ</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">AI-ассистент по психологии</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] text-base px-5 py-2.5">
              <BookOpen className="w-5 h-5 mr-2" />
              База знаний
            </Button>
            <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-3 rounded-lg text-base font-semibold shadow-lg shadow-purple-900/40">
              Попробовать бесплатно
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start text-base py-3">
                <BookOpen className="w-5 h-5 mr-2" />
                База знаний
              </Button>
              <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-3 rounded-lg text-base font-semibold">
                Попробовать бесплатно
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#7c3aed] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["😰", "💑", "🧠", "📖"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#7c3aed] text-xl"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}
          >
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">ПсихоИИ Сервер</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Темы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["тревога", "отношения", "самооценка", "выгорание"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Сессии</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Анонимно", "Голосом"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Область пользователя */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#7c3aed] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">А</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Аноним</div>
                <div className="text-[#b9bbbe] text-xs truncate">В безопасности</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Mic className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">тревога</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Задай вопрос — ИИ ответит и запомнит</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {/* Приветственное сообщение от бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#7c3aed] rounded-full flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">ПсихоИИ</span>
                    <span className="bg-[#7c3aed] text-white text-xs px-1 rounded">ИИ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Привет! Я ПсихоИИ — твой личный помощник по психологии.</strong> Задай любой вопрос, и я отвечу на основе проверенных книг и методик. Я учусь с каждым разговором.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#7c3aed] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что я умею:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>Отвечаю на вопросы по психологии простым языком</li>
                        <li>Помогаю разобраться с тревогой, стрессом и отношениями</li>
                        <li>Рекомендую упражнения из когнитивно-поведенческой терапии</li>
                        <li>Запоминаю контекст — понимаю тебя лучше с каждым разом</li>
                        <li>Основан на базе психологических книг и исследований</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение пользователя */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">А</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Анна</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:05</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Последнее время постоянно тревожусь без причины. Что делать?
                  </div>

                  {/* Карточка-ответ ИИ */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-12 sm:h-16 bg-gradient-to-r from-[#7c3aed] to-[#5865f2] relative flex items-center px-4 gap-2">
                      <Sparkles className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold text-sm">ПсихоИИ анализирует...</span>
                    </div>
                    <div className="pt-3 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="flex items-center gap-2 text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                        <Brain className="w-3 h-3" />
                        <span>Ответ на основе КПТ</span>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#36393f] rounded-lg">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#7c3aed] to-[#5865f2] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-semibold text-xs sm:text-sm mb-1">Техника "5-4-3-2-1"</div>
                          <div className="text-[#dcddde] text-xs sm:text-sm mb-1">Упражнение на заземление</div>
                          <div className="text-[#b9bbbe] text-xs sm:text-sm mb-2">Когнитивно-поведенческая терапия</div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                            <span className="text-[#3ba55c] text-xs font-medium">Изучено из 12 книг</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ещё одно сообщение */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Михаил</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:12</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    Уже неделю пользуюсь — помог справиться с паническими атаками. Рекомендую!
                  </div>
                </div>
              </div>

              {/* Секция "Начало работы" */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#7c3aed]" />
                  Начни разговор с ПсихоИИ
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Задай вопрос</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Напиши всё что тебя беспокоит — без осуждения</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Получи ответ</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">ИИ даёт советы на основе книг по психологии</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">ИИ обучается</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">С каждым разговором ответы становятся точнее</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-10 py-4 rounded-xl text-lg font-bold shadow-xl shadow-purple-900/50 transition-transform hover:scale-105">
                    <Brain className="w-5 h-5 mr-2" />
                    Начать бесплатно
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#7c3aed] text-white hover:bg-[#40444b] hover:border-[#9f6ef5] px-10 py-4 rounded-xl text-lg font-semibold bg-transparent transition-transform hover:scale-105"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Читать базу знаний
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему ПсихоИИ?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Мгновенные ответы",
                      desc: "Ответ в течение секунды, 24/7",
                    },
                    {
                      icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Понимает контекст",
                      desc: "Запоминает твою историю и учитывает её",
                    },
                    {
                      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Постоянно учится",
                      desc: "База знаний расширяется каждую неделю",
                    },
                    {
                      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Полная анонимность",
                      desc: "Твои разговоры никому не передаются",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#7c3aed] mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Спроси ПсихоИИ что-нибудь..."
                  className="flex-1 bg-transparent text-[#dcddde] text-xs sm:text-sm placeholder:text-[#72767d] outline-none"
                />
                <Brain className="w-4 h-4 text-[#72767d] cursor-pointer hover:text-[#7c3aed] transition-colors" />
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Сейчас общаются - 3</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Анна",
                    status: "Спрашивает про тревогу",
                    avatar: "А",
                    color: "from-purple-500 to-pink-500",
                  },
                  { name: "Михаил", status: "В сети", avatar: "М", color: "from-green-500 to-teal-500" },
                  { name: "Елена", status: "Читает про отношения", avatar: "Е", color: "from-blue-500 to-purple-500" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;