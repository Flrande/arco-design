import 'dayjs/locale/ja';

const Calendar = {
  formatYear: 'YYYY',
  formatMonth: 'MMM YYYY',
  today: '今日',
  view: {
    month: '月',
    year: '年',
    week: '週間',
    day: '日',
  },
  month: {
    long: {
      January: '1月',
      February: '2月',
      March: '3月',
      April: '4月',
      May: '5月',
      June: '6月',
      July: '7月',
      August: '8月',
      September: '9月',
      October: '10月',
      November: '11月',
      December: '12月',
    },
    short: {
      January: '1月',
      February: '2月',
      March: '3月',
      April: '4月',
      May: '5月',
      June: '6月',
      July: '7月',
      August: '8月',
      September: '9月',
      October: '10月',
      November: '11月',
      December: '12月',
    },
  },
  week: {
    long: {
      self: '週間',
      monday: '月曜',
      tuesday: '火曜日',
      wednesday: '水曜日',
      thursday: '木曜日',
      friday: '金曜日',
      saturday: '土曜日',
      sunday: '日曜日',
    },
    short: {
      self: '週間',
      monday: '月',
      tuesday: '火',
      wednesday: '水',
      thursday: '木',
      friday: '金',
      saturday: '土',
      sunday: '日',
    },
  },
};

export default {
  locale: 'ja-JP',
  dayjsLocale: 'ja',
  Calendar,
  DatePicker: {
    Calendar,
    placeholder: {
      date: '日付を選択してください',
      week: '週を選択してください',
      month: '月を選択してください',
      year: '年を選択してください',
      quarter: '四半期を選択してください',
    },
    placeholders: {
      date: ['開始日', '終了日'],
      week: ['週を開始', '週を終了'],
      month: ['開始月', '終了月'],
      year: ['開始年', '終了年'],
      quarter: ['四半期開始', '四半期終了'],
    },
    selectTime: '時間を選択',
    selectDate: '日付を選択',
    today: '今日',
    now: 'たった今',
    ok: '確認',
  },
  Drawer: {
    okText: '確認',
    cancelText: 'キャンセル',
  },
  Empty: {
    noData: 'データなし',
  },
  Modal: {
    okText: '確認',
    cancelText: 'キャンセル',
  },
  Pagination: {
    goto: 'に移動',
    page: 'ページ',
    countPerPage: '記事/ページ',
    total: '合計 {0}',
    prev: '前のページ',
    next: '次のページ',
    currentPage: 'ページ{0}',
    prevSomePages: '前の{0}ページ',
    nextSomePages: '次の{0}ページ',
    pageSize: 'ページ番号',
  },
  Popconfirm: {
    okText: '確認',
    cancelText: 'キャンセル',
  },
  Table: {
    okText: '確認',
    resetText: 'リセット',
    sortAscend: 'クリックして昇順で並べ替えます',
    sortDescend: 'クリックして降順で並べ替えます',
    cancelSort: 'クリックして並べ替えをキャンセル',
  },
  TimePicker: {
    ok: '確認',
    placeholder: '時間をお選びください',
    placeholders: ['開始時間', '終了時間'],
    now: 'たった今',
  },
  Progress: {
    success: '実施する',
    error: '失敗',
  },
  Upload: {
    start: '開始',
    cancel: 'キャンセル',
    delete: '削除',
    reupload: '再試行をクリックします',
    upload: 'アップロードをクリック',
    preview: 'プレビュー',
    drag: 'ファイルをクリックまたはドラッグして、ここにアップロードします',
    dragHover: 'ファイルを解放してアップロードを開始します',
    error: 'アップロードに失敗しました',
  },
  Typography: {
    copy: 'コピー',
    copied: 'コピー完了',
    edit: '編集',
    fold: '折りたたむ',
    unfold: '展開する',
  },
  Transfer: {
    resetText: 'リセット',
  },
  ImagePreview: {
    fullScreen: '全画面表示',
    rotateRight: '右に回る',
    rotateLeft: '左に回転',
    zoomIn: 'ズームイン',
    zoomOut: 'ズームアウトする',
    originalSize: 'オリジナルサイズ',
  },
};
