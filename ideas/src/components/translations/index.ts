export interface PageData {
    [key: string]: {
      [key: string]: string |  {
        [key: string]: string
      }
    }
}

export const en: PageData = {
  NavBar: {
    about: 'About',
    language: 'Language',
    account: 'Account',
    signIn: 'Sign in',
    signUp: 'Sign up',
    rss: 'RSS',
    download: 'Downloads',
    signOut: 'Sign out',
    plans: 'Plans',
    achievements: 'Achievements'
  },
  SideBar: {
    title:'Let\'s Create Your Learning Plan',
    description:'Choose the topics about Software development, Testing, DevOps, or 100DaysOfCode to build the personal learning plan',
    placeHolderForSearch:'ex, ReactJS, next.js, Golang...',
    dropdownForCategories:{
      all: 'All',
      daysOfCode: '100DaysOfCode',
      programming: 'Programming'
    }
  },
  ArticleList: {
    learningMaterials: 'Learning materials',
    discoveredMaterials: 'Discovered materials',
    login: 'Login',
    title:'Click the details button to check the article.',
    subTitle:'to add articles or skills in your learning plan or open them directly.'
  },
  Article: {
    details:'Details'
  },
  Footer: {
    logon:'Learn, Think, and Improve',
    getStarted: 'Get Started',
    social: {
      twitter: 'Twitter',
      facebook:'Facebook',
      linkedin:'Linkedin',
      medium:'Medium',
      youtube:'Youtube',
      github:'Github'
    },
    copyrightText:'@2021 Jen-Hsuan Hsieh. All right reserved.'
  },
  ArticleModal: {
    author: 'Author',
    category: 'Category',
    dateTime: 'Time',
    readTime: 'Read time',
    close: 'Close',
    open:'Open the article',
    keyword: 'Keywords'
  },
  SignInForm: {
    title: 'Welcome back!',
    alt:'Or signin by username',
    placeHolderForName:'Enter Username',
    placeHolderForPassword:'Password',
    btn:'Sign in'
  },
  SignUpForm: {
    title: 'Create Your Free Account',
    alt:'Or signup by email',
    placeHolderForName:'Enter Username',
    placeHolderForMail:'Enter e-mail',
    placeHolderForPassword:'Password',
    btn:'Get Started'
  },
  AboutPageContent: {
    title:'About Daily Learning',
    subtitle1:'Read an Article a Day',
    content1:'There are many information around us today. To improve ourselves, we just need to move a further move every day. Daily learning provides articles, challenges, or videos to people who are also self-learner for programming',
    subtitle2:'About the Author',
    content2:'Jen-Hsuan Hsieh (Sean Hsieh) is also a self-learner, writer, and developer. He is a senior web developer with front-end JavaScript framework\'s experiences. He is familiar with React.js, Knockout.js, server-side languages like NodeJS and ASP.NET MVC',
    subtitle3:'Get In Touch',
    content3_1: ' For any general questions, email to',
    content3_2: 'We\'ll get back to you ASAP'
  },
  DownloadsPageContent: {
    title:'Downloads',
    subtitle1:'Desktop Version is available!',
    content1:'You can feel free to download the dektop version of Daily Learning! Please login for downloading.',
  },
  AchievementsContent: {
    title:'Your Achievements',
    subtitle1:'Keep going!',
    bookmarked: 'Bookmarked',
    completed: 'Completed',
    unfinished : 'Unfinished'
  },
  BookmarksContent: {
    title:'Your Bookmarks',
    subtitle1:'Read articles you have bookmarked. Open articles to clean your todo list!'
  }
}

export const zhTW: PageData = {
  NavBar: {
    about: '關於',
    language: '語言',
    account: '帳戶',
    signIn: '登入',
    signUp: '註冊',
    rss: 'RSS',
    download: '下載',
    signOut: '登出',
    plans: '計畫',
    achievements: '成就'
  },
  SideBar: {
    title:'讓我們制定您的學習計劃',
    description:'選擇有關軟件開發，測試，DevOps或100DaysOfCode的主題以構建個人學習計劃',
    placeHolderForSearch:'例如，ReactJS，next.js，Golang ...',
    dropdownForCategories:{
      all: '全部',
      daysOfCode: '100天的代碼',
      programming: '程式設計'
    }
  },
  ArticleList: {
    learningMaterials: '學習資料',
    discoveredMaterials: '發現的資料',
    login: '登入',
    title:'單擊詳細信息按鈕以查看文章',
    subTitle:'在學習計劃中添加文章或技能或直接打開它們'
  },
  Article: {
    details:'詳細信息'
  },
  Footer: {
    logon:'學習，思考和改善',
    getStarted: '開始使用',
    social: {
      twitter: 'Twitter',
      facebook:'Facebook',
      linkedin:'Linkedin',
      medium:'Medium',
      youtube:'Youtube',
      github:'Github'
    },
    copyrightText:'@2021 Jen-Hsuan Hsieh. All right reserved.'
  },
  ArticleModal: {
    author: '作者',
    category: '類別',
    dateTime: '時間',
    readTime: '閱讀時間',
    close: '關閉',
    open:'打開文章',
    keyword: '關鍵字'
  },
  SignInForm: {
    title: '歡迎回來！',
    alt:'或通過用戶名登入',
    placeHolderForName:'輸入用戶名',
    placeHolderForPassword:'密碼',
    btn:'登入'
  },
  SignUpForm: {
    title: '創建您的免費帳戶',
    alt:'或通過電子郵件註冊',
    placeHolderForName:'輸入用戶名',
    placeHolderForMail:'輸入電子郵件',
    placeHolderForPassword:'密碼',
    btn:'開始使用'
  },
  AboutPageContent: {
    title:'關於 Daily Learning',
    subtitle1:'每天閱讀一篇文章',
    content1:'今天我們周圍有很多資訊。為了進步，我們需要每天前進一小步。Daily Learning提供文章，挑戰或影音給同樣自學程式語言的人',
    subtitle2:'關於作者',
    content2:'Jen-Hsuan Hsieh (Sean Hsieh) 是一名自學者，作家和也是開發者。他具有前端JavaScript框架經驗的網頁開發人員。熟悉React.js，Knockout.js，NodeJS和ASP.NET MVC等服務器端語言',
    subtitle3:'保持聯繫',
    content3_1: '如有任何一般性問題，請發送電子郵件至',
    content3_2: '我們會盡快與您聯繫'
  },
  DownloadsPageContent: {
    title:'資料下載',
    subtitle1:'桌面版可用！',
    content1:'您可以隨意下載桌面版的Daily Learning！登錄進行下載',
  },
  AchievementsContent: {
    title:'您的成就',
    subtitle1:'繼續!',
    bookmarked: '已收藏',
    completed: '已完成',
    unfinished : '未完成'
  },
  BookmarksContent: {
    title:'您的書籤',
    subtitle1:'閱讀您已收藏的文章！'
  }
}

export const zhCN: PageData = {
  NavBar: {
    about: '关于',
    language:'语言',
    account: '帐户',
    signIn: '登录',
    signUp: '报名',
    rss: 'RSS',
    download: '下载',
    signOut: '登出',
    plans: '计划',
    achievements: '成就'
  },
  SideBar: {
    title:'让我们制定您的学习计划',
    description:'选择有关软件开发，测试，DevOps或100DaysOfCode的主题以构建个人学习计划',
    placeHolderForSearch:'例如，ReactJS，next.js，Golang ...',
    dropdownForCategories:{
      all: '全部',
      daysOfCode: '100天的代码',
      programming: '程式设计'
    }
  },
  ArticleList: {
    learningMaterials: '学习资料',
    discoveredMaterials: '发现的资料',
    login: '登录',
    title:'单击详细信息按钮以查看文章',
    subTitle:'在学习计划中添加文章或技能或直接打开它们'
  },
  Article: {
    details:'详细信息'
  },
  Footer: {
    logon:'学习，思考和改善',
    getStarted: '开始使用',
    social: {
      twitter: 'Twitter',
      facebook:'Facebook',
      linkedin:'Linkedin',
      medium:'Medium',
      youtube:'Youtube',
      github:'Github'
    },
    copyrightText:'@2021 Jen-Hsuan Hsieh. All right reserved.'
  },
  ArticleModal: {
    author: '著者',
    category: '类别',
    dateTime: '时间',
    readTime: '阅读时间',
    close: '关闭',
    open:'打开文章',
    keyword: '关键字'
  },
  SignInForm: {
    title: '欢迎回来！',
    alt:'或通过用户名登录',
    placeHolderForName:'输入用户名',
    placeHolderForPassword:'密码',
    btn:'登录'
  },
  SignUpForm: {
    title: '创建您的免费帐户',
    alt:'或通过电子邮件注册',
    placeHolderForName:'输入用户名',
    placeHolderForMail:'输入电子邮件',
    placeHolderForPassword:'密码',
    btn:'开始使用'
  },
  AboutPageContent: {
    title:'关于 Daily Learning',
    subtitle1:'每天阅读一篇文章',
    content1:'今天我们周围有很多信息。为了提高自己，我们需要每天采取进一步行动。Daily Learning向同样自学编程的人提供文章，挑战或视频',
    subtitle2:'关于作者',
    content2:'Jen-Hsuan Hsieh (Sean Hsieh) 是一名自学，作家和开发人员。他是具有前端JavaScript框架经验的高级Web开发人员。他熟悉React.js，Knockout.js，NodeJS和ASP.NET MVC等服务器端语言',
    subtitle3:'保持联系',
    content3_1: '如有任何一般性问题，请发送电子邮件至',
    content3_2: '我们会尽快与您联系'
  },
  DownloadsPageContent: {
    title:'资料下载',
    subtitle1:'桌面版可用！',
    content1:'您可以随意下载桌面版的Daily Learning！登录进行下载',
  },
  AchievementsContent: {
    title:'您的成就',
    subtitle1:'继续！',
    bookmarked: '已收藏',
    completed: '已完成',
    unfinished : '未完成'
  },
  BookmarksContent: {
    title:'您的书签',
    subtitle1:'阅读您已收藏的文章！'
  }
}

export const ja: PageData = {
  NavBar: {
    about: 'について',
    language:'言語',
    account: 'アカウント',
    signIn: 'ログイン',
    signUp: 'サインアップ',
    rss: 'RSS',
    download: 'ダウンロード',
    signOut: 'サインアウト',
    plans: '予定',
    achievements: '実績'
  },
  SideBar: {
    title:'学習計画を立てましょう',
    description:'ソフトウェア開発、テスト、DevOps、または100DaysOfCodeに関するトピックを選択して、個人学習計画を作成します',
    placeHolderForSearch:'ex、ReactJS、next.js、Golang ...',
    dropdownForCategories:{
      all: 'すべて',
      daysOfCode: '100日間のコード',
      programming: 'プログラミング'
    }
  },
  ArticleList: {
    learningMaterials: '学習教材',
    discoveredMaterials: '発見された教材',
    login: 'ログイン',
    title:'詳細ボタンをクリックして記事を確認してください',
    subTitle:'学習計画に記事やスキルを追加したり、直接開いたりする'
  },
  Article: {
    details:'詳細'
  },
  Footer: {
    logon:'学び、考え、そして改善する',
    getStarted: 'はじめに',
    social: {
      twitter: 'Twitter',
      facebook:'Facebook',
      linkedin:'Linkedin',
      medium:'Medium',
      youtube:'Youtube',
      github:'Github'
    },
    copyrightText:'@2021 Jen-Hsuan Hsieh. All right reserved.'
  },
  ArticleModal: {
    author: '著者',
    category: 'カテゴリー',
    dateTime: '時刻',
    readTime: '読み取り時間',
    close: '閉じる',
    open:'記事を開く',
    keyword: 'キーワード'
  },
  SignInForm: {
    title: 'お帰りなさい！',
    alt:'またはユーザー名でサインイン',
    placeHolderForName:'ユーザーネームを入力してください',
    placeHolderForPassword:'パスワード',
    btn:'ログイン'
  },
  SignUpForm: {
    title: '無料アカウントを作成する',
    alt:'またはメールでサインアップ',
    placeHolderForName:'ユーザーネームを入力してください',
    placeHolderForMail:'メールアドレスを入力して',
    placeHolderForPassword:'パスワード',
    btn:'はじめに'
  },
  AboutPageContent: {
    title:'Daily Learning について',
    subtitle1:'1日記事を読む',
    content1:'今日、私たちの周りにはたくさんの情報があります。自分自身を向上させるために、毎日少しずつ進歩が必要です。毎日の学習は、プログラミングの自己学習者でもある人々に記事、課題、またはビデオを提供します',
    subtitle2:'著者について',
    content2:'Jen-Hsuan Hsieh (Sean Hsieh) は自己学習者、ライター、開発者でもあります。彼は、フロントエンドJavaScriptフレームワークの経験を持つシニアWeb開発者です。彼はReact.js、Knockout.js、NodeJSやASP.NETMVCなどのサーバー側言語に精通しています。',
    subtitle3:'連絡する',
    content3_1: '一般的な質問については',
    content3_2: 'で連絡お願い致します'
  },
  DownloadsPageContent: {
    title:'ダウンロード',
    subtitle1:'デスクトップ版が利用可能です！',
    content1:'デイリーラーニングのデスクトップ版をお気軽にダウンロードしてください！ダウンロードのためにログインします',
  },
  AchievementsContent: {
    title:'あなたの成果',
    subtitle1:'立ち止まるな！',
    bookmarked: 'ブックマーク',
    completed: '終了しました',
    unfinished : '未完成'
  },
  BookmarksContent: {
    title:'あなたのブックマーク',
    subtitle1:'ブックマークした記事を読んでください。記事を開いてToDoリストをクリーンアップしてください！'
  }
}
