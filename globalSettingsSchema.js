const localeFieldsSet = [
  {
    source: 'ABOUT_US_MENU',
    label: 'ABOUT_US_MENU',
    help: 'About us',
  },
  {
    source: 'ENTERTAINMENT_MENU',
    label: 'ENTERTAINMENT_MENU',
    help: 'Entertainment',
  },
  {
    source: 'TIMES_REQUESTED',
    label: 'TIMES_REQUESTED',
    help: 'Requested %AMOUNT% times',
  },
  {
    source: 'YOUR_DISCOUNT',
    label: 'YOUR_DISCOUNT',
    help: 'Your discount',
  },
  {
    source: 'CORONABAR_SENTENCE',
    label: 'CORONABAR_SENTENCE',
    help: 'Book your entertainment with confidence with our free',
  },
  {
    source: 'CORONA_RULE',
    label: 'CORONA_RULE',
    help: 'Corona plan',
  },

  {
    source: 'RECEIVE_PROPOSAL',
    label: 'RECEIVE_PROPOSAL',
    help: 'Receive proposal',
  },
  {
    source: 'RECOMMENDATIONS',
    label: 'RECOMMENDATIONS',
    help: 'Our top recommendations',
  },
  {
    source: 'RECOMMENDATIONS_SKIP',
    label: 'RECOMMENDATIONS_SKIP',
    help: 'view all results',
  },
  {
    source: 'SEARCH_PLACEHOLDER',
    label: 'SEARCH_PLACEHOLDER',
    help: 'Search...',
  },
  {
    source: 'SEARCH_EXPL',
    label: 'SEARCH_EXPL',
    help: 'Search through our options',
  },
  {
    source: 'SEARCH_TITLE',
    label: 'SEARCH_TITLE',
    help: 'Search',
  },
  {
    source: 'PHONE_EXPL',
    label: 'PHONE_EXPL',
    help: 'Call us now! We are happy to help you.',
  },
  /* {
    "source": "ORDER_DESC_ADDED",
    "label": "ORDER_DESC_ADDED",
    help: "Act \"{{addedProduct.name}}\" has been added to your wish list. Enter the details below, or search further."
  },*/
  {
    source: 'ORDER_DESC_DEFAULT',
    label: 'ORDER_DESC_DEFAULT',
    help: 'Enter the details below and receive a quote without obligation.',
  },
  {
    source: 'INFO_ABOUT',
    label: 'INFO_ABOUT',
    help: 'Request information about {{product}}',
  },
  {
    source: 'INFO_GENERAL',
    label: 'INFO_GENERAL',
    help: 'Do you want your party to succeed?',
  },
  {
    source: 'INFO_WE',
    label: 'INFO_WE',
    help: 'Whatever your event or celebration, we are here to make your special day a truly memorable one.',
  },
  /*  {
    "source": "ORDER_DESC_CONCIERGE",
    "label": "ORDER_DESC_CONCIERGE",
    help: "Too difficult to choose? Let us help you with the best option for your occasion. Fill in as many details as possible. You will then receive several suggestions without obligation."
  },*/
  {
    source: 'Q_OCCASION',
    label: 'Q_OCCASION',
    help: 'What is your occasion?',
  },
  {
    source: 'Q_BUDGET',
    label: 'Q_BUDGET',
    help: 'What is your budget?',
  },
  {
    source: 'Q_CATEGORY',
    label: 'Q_CATEGORY',
    help: 'Entertainment',
  },
  {
    source: 'SHOW_RESULTS',
    label: 'SHOW_RESULTS',
    help: 'Show results',
  },
  {
    source: 'FRONT_HEADER_SUB',
    label: 'FRONT_HEADER_SUB',
    help: 'Only the best entertainment with top references. Search our range of 400+ options.',
  },
  {
    source: 'EXTRA_FORM',
    label: 'EXTRA_FORM',
    help: 'Let us help you further and fill in one or more fields. This way we can take your wishes into account even better.',
  },
  {
    source: 'BTN_OFFER',
    label: 'BTN_OFFER',
    help: 'Free quote',
  },
  {
    source: 'BTN_COMPLETE',
    label: 'BTN_COMPLETE',
    help: 'Complete',
  },
  {
    source: 'BTN_NO_EXTRA',
    label: 'BTN_NO_EXTRA',
    help: 'Not necessary',
  },
  {
    source: 'ANY_QUESTIONS',
    label: 'ANY_QUESTIONS',
    help: 'Do you have any questions?',
  },
  {
    source: 'NEWSLETTER_SUB',
    label: 'NEWSLETTER_SUB',
    help: 'Subscribe to the newsletter',
  },
  {
    source: 'NEWSLETTER_SUBBED',
    label: 'NEWSLETTER_SUBBED',
    help: 'You will now receive our newsletter!',
  },
  {
    source: 'PAYMENT_ACCEPT',
    label: 'PAYMENT_ACCEPT',
    help: 'We accept {{method}}',
  },
  {
    source: 'SEARCH_FILTER',
    help: 'Search filter',
  },
  {
    source: 'FLT_CATEGORY_TOP',
    label: 'FLT_CATEGORY_TOP',
    help: 'Type entertainment',
  },
  {
    source: 'FLT_RESET',
    label: 'FLT_RESET',
    help: 'Reset',
  },
  {
    source: 'FLT_NO_MAX',
    label: 'FLT_NO_MAX',
    help: 'No maximum',
  },
  {
    source: 'FLT_RATING_MIN',
    label: 'FLT_RATING_MIN',
    help: 'Minimum:',
  },
  {
    source: 'FLT',
    label: 'FLT',
    help: 'Filter',
  },
  {
    source: 'FLT_AMT_1',
    label: 'FLT_AMT_1',
    help: '1 Filter',
  },
  {
    source: 'FLT_AMT_MULT',
    label: 'FLT_AMT_MULT',
    help: '{{amount}} filters',
  },
  {
    source: 'RATING_TEXT',
    label: 'RATING_TEXT',
    help: '{{rating}} out of 5 stars',
  },
  {
    source: 'OUT_OF_MAX',
    help: 'out of {{max}}',
  },
  {
    source: 'AMT_STARS',
    label: 'AMT_STARS',
    help: '{{amount}} stars',
  },
  {
    source: 'AMT_STARS_1',
    label: 'AMT_STARS_1',
    help: '1 star',
  },

  {
    source: 'BUDGET',
    label: 'BUDGET',
    help: 'Budget',
  },
  {
    source: 'RATING',
    label: 'RATING',
    help: 'Rating',
  },
  {
    source: 'RATING_AMT_1',
    label: 'RATING_AMT_1',
    help: '1 Review',
  },
  {
    source: 'RATING_AMT_MULT',
    label: 'RATING_AMT_MULT',
    help: '{{amount}} Reviews',
  },
  {
    source: 'RATING_SITE_TOTAL',
    label: 'RATING_SITE_TOTAL',
    help: 'Customers have given {{total}} reviews about Evenses.',
  },
  {
    source: 'RATING_SITE_AVG',
    label: 'RATING_SITE_AVG',
    help: 'The average rating is a {{average}} out of 5',
  },
  {
    source: 'SHOW_PRODUCT',
    label: 'SHOW_PRODUCT',
    help: 'More information',
  },
  {
    source: 'PERC_MATCH',
    label: 'PERC_MATCH',
    help: '{{percentage}} match',
  },
  {
    source: 'PERC_EXPL',
    label: 'PERC_EXPL',
    help: 'This search result matches {{percentage}} to the search query you entered',
  },
  {
    source: 'FAV',
    label: 'FAV',
    help: 'Save in favourites',
  },
  {
    source: 'GENRES',
    label: 'GENRES',
    help: 'Genres',
  },
  {
    source: 'BTN_VIDEO',
    label: 'BTN_VIDEO',
    help: 'Watch video',
  },
  {
    source: 'NEXT_AMT',
    label: 'NEXT_AMT',
    help: 'Next {{amount}}',
  },
  {
    source: 'OPEN_MENU',
    label: 'OPEN_MENU',
    help: 'Open the menu',
  },
  {
    source: 'TO_FRONT',
    label: 'TO_FRONT',
    help: 'To the front page',
  },
  {
    source: 'CLOSE',
    label: 'CLOSE',
    help: 'Close',
  },
  {
    source: 'SHOW_MORE_LINKS',
    label: 'SHOW_MORE_LINKS',
    help: 'Show more links',
  },
  {
    source: 'REQUIRED_FIELD',
    label: 'REQUIRED_FIELD',
    help: 'required field',
  },
  {
    source: 'SHOW_SHORT',
    label: 'SHOW_SHORT',
    help: 'More',
  },
  {
    source: 'REPERTOIRE',
    label: 'REPERTOIRE',
    help: 'Repertoire',
  },
  {
    source: 'SONGS',
    label: 'SONGS',
    help: 'Songs',
  },
  {
    source: 'GENRE',
    label: 'GENRE',
    help: 'Genre',
  },
  {
    source: 'OCCASION',
    label: 'OCCASION',
    help: 'Occasion',
  },
  {
    source: 'TO',
    label: 'TO',
    help: 'To',
  },
  {
    source: 'SUBSCRIBE',
    label: 'SUBSCRIBE',
    help: 'Subscribe',
  },
  {
    source: 'PRICE_ON_REQUEST',
    label: 'PRICE_ON_REQUEST',
    help: 'price on request',
  },
  {
    source: 'PRICE_ON_REQUEST_WARNING',
    label: 'PRICE_ON_REQUEST_WARNING',
    help: 'The prices of famous artists are usually between ... and ...',
  },
  {
    source: 'SUITABLE_FOR',
    label: 'SUITABLE_FOR',
    help: 'Suitable for',
  },
  {
    source: 'CHECK_AV',
    label: 'CHECK_AV',
    help: 'Check availability',
  },
  {
    source: 'REQUEST_BTN',
    help: 'Request',
  },
  {
    source: 'CATEGORY',
    label: 'CATEGORY',
    help: 'Category',
  },
  {
    source: 'FROM',
    label: 'FROM',
    help: 'From',
  },
  {
    source: 'READ_MORE',
    label: 'READ_MORE',
    help: 'Read more',
  },
  {
    source: 'CONTACT',
    label: 'CONTACT',
    help: 'Contact',
  },
  {
    source: 'RELATED',
    label: 'RELATED',
    help: 'You might also like',
  },
  {
    source: 'INP_NAME',
    label: 'INP_NAME',
    help: 'Name',
  },
  {
    source: 'INP_EMAIL',
    label: 'INP_EMAIL',
    help: 'Email',
  },
  {
    source: 'INP_PHONE',
    label: 'INP_PHONE',
    help: 'Phone number',
  },
  {
    source: 'INP_MOBILE_PHONE',
    label: 'INP_MOBILE_PHONE',
    help: 'Mobile phone number',
  },
  {
    source: 'INP_DATE',
    label: 'INP_DATE',
    help: 'Date of your event',
  },
  {
    source: 'INP_TIME_START',
    label: 'INP_TIME_START',
    help: 'Start time',
  },
  {
    source: 'INP_TIME_END',
    label: 'INP_TIME_END',
    help: 'End time',
  },
  {
    source: 'INP_LOCATION',
    label: 'INP_LOCATION',
    help: 'Location',
  },
  {
    source: 'INP_WISHES',
    label: 'INP_WISHES',
    help: 'Your wishes',
  },
  {
    source: 'INP_GUESTS',
    label: 'INP_GUESTS',
    help: 'Number of guests',
  },
  {
    source: 'INP_BUDGET',
    label: 'INP_BUDGET',
    help: 'Budget',
  },
  {
    source: 'INP_PARTY',
    label: 'INP_PARTY',
    help: 'Describe your perfect party',
  },

  {
    source: 'INP_MESSAGE',
    label: 'INP_MESSAGE',
    help: 'Your message',
  },

  {
    source: 'LOCATION',
    label: 'LOCATION',
    help: 'Location',
  },
  {
    source: 'FIND_PLACE',
    label: 'FIND_PLACE',
    help: 'Find a place',
  },
  {
    source: 'OPERATES_IN',
    label: 'OPERATES_IN',
    help: 'Operates in',
  },

  {
    source: 'DIST_UNTIL',
    help: 'Within {{dist}} km',
  },
  {
    source: 'DIST_FURTHER',
    help: 'Beyond {{dist}} km',
  },

  /*{
    source: "HELP_POPUP_TITLE",
    label: "HELP_POPUP_TITLE",
    help: "Let us help you find what you need"
  },
  {
    source: "HELP_POPUP_TEXT",
    label: "HELP_POPUP_TEXT",
    help:
      "Our team gladly helps planning your event. Tell us your wishes and we'll provide you with a few suggestions. This is free of charge and without obligation!"
  },
  {
    source: "HELP_POPUP_YES",
    label: "HELP_POPUP_YES",
    help: "I would like to have some guidance"
  },
  {
    source: "HELP_POPUP_NO",
    label: "HELP_POPUP_NO",
    help: "No, I prefer to look at the possibilities myself"
  },*/
  {
    source: 'SORT_BY',
    label: 'SORT_BY',
    help: 'Sort by',
  },
  {
    source: 'SORT_RELEVANCE',
    label: 'SORT_RELEVANCE',
    help: 'Relevance',
  },
  {
    source: 'SORT_RATING',
    label: 'SORT_RATING',
    help: 'Best rated',
  },
  {
    source: 'SORT_PRICE_ASC',
    label: 'SORT_PRICE_ASC',
    help: 'Price (Low > High)',
  },
  {
    source: 'SORT_PRICE_DESC',
    label: 'SORT_PRICE_DESC',
    help: 'Price (High > Low)',
  },
  {
    source: 'SORT_TITLE',
    label: 'SORT_TITLE',
    help: 'Alphabetical (A > Z)',
  },
  {
    source: 'SORT_DATE',
    label: 'SORT_DATE',
    help: 'Last added',
  },
  {
    source: 'PARTNER_SITE',
    label: 'PARTNER_SITE',
    help: 'Partner website',
  },

  {
    source: 'ADVICE_HEAD',
    label: 'ADVICE_HEAD',
    help: 'Advice or help needed?',
  },
  {
    source: 'ADVICE_DESC',
    label: 'ADVICE_DESC',
    help: '7 days a week we are ready to help you via',
  },

  {
    source: 'OR_CALL',
    label: 'OR_CALL',
    help: 'or by phone:',
  },

  {
    source: 'CALL_ME',
    label: 'CALL_ME',
    help: 'Or let us call you back',
  },
  {
    source: 'SEND',
    label: 'SEND',
    help: 'Send',
  },
  {
    source: 'DATE',
    label: 'DATE',
    help: 'Date',
  },
  {
    source: 'YEAR',
    help: 'Year',
  },
  {
    source: 'MONTH',
    help: 'Month',
  },
  {
    source: 'DAY',
    help: 'Day',
  },

  {
    source: 'HOUR',
    label: 'HOUR',
    help: 'hour',
  },
  {
    source: 'MINUTES',
    label: 'MINUTES',
    help: 'mins',
  },
  {
    source: 'AGENDA_CHECK',
    label: 'AGENDA_CHECK',
    help: 'Check the availability of {{product}} here.',
  },
  {
    source: 'AGENDA_AVAILABLE',
    label: 'AGENDA_AVAILABLE',
    help: 'Great! {{product}} is available from {{event_start}} till {{event_end}}.',
  },
  {
    source: 'AGENDA_DISCLAIMER',
    label: 'AGENDA_DISCLAIMER',
    help: 'We will immediately contact them to be 100% sure',
  },
  {
    source: 'AGENDA_AVAILABLE_FAMOUS',
    label: 'AGENDA_AVAILABLE_FAMOUS',
    help: '(Same as above, for famous artists)',
  },
  {
    source: 'AGENDA_DISCLAIMER_FAMOUS',
    label: 'AGENDA_DISCLAIMER_FAMOUS',
    help: '(Same as above, for famous artists)',
  },
  {
    source: 'FAQS',
    help: 'FAQs',
  },
  {
    source: 'SEE_ALL_REVIEWS',
    help: '+ see all reviews',
  },
  {
    source: 'SEND_MESSAGE',
    help: 'Send message',
  },
  {
    source: 'ABOUT',
    help: 'About',
  },
  {
    source: 'ABOUT_SUBJECT',
    help: 'About {{subject}}',
  },
  {
    source: 'SOCIAL_MEDIA',
    help: 'Social media',
  },
  {
    source: 'BACK_TO_HOME',
    help: 'Back to home',
  },
  {
    source: 'BACK',
    help: 'Back',
  },
  {
    source: 'SAVE_MORE',
    help: 'Save more',
  },
  {
    source: 'BOOK_X_ITEMS',
    help: 'Book {{amount}} items: get {{discount}} discount',
  },
  {
    source: 'HAPPY_CUSTOMERS',
    help: 'Our happy customers',
  },
  {
    source: 'PRODUCT_ADDED',
    help: 'Added to your request.',
  },
  {
    source: 'DISCOUNT_ADDED',
    help: 'Your discount is now {{total_discount}}.',
  },
  {
    source: 'GOTO_REQUEST',
    help: 'Proceed to request',
  },
  {
    source: 'FILL_MISSING_INFO',
    help: 'Please fill out the remaining fields',
  },
  {
    source: 'REMOVE_ITEM',
    help: 'Remove from request',
  },
  {
    source: 'COMMUNICATION_PREFERENCE',
    help: 'What are your preferred means of communication?',
  },
  {
    source: 'BY_TELEPHONE',
    help: 'By telephone',
  },
  {
    source: 'BY_WHATSAPP',
    help: 'By Whatsapp',
  },
  {
    source: 'BY_EMAIL',
    help: 'Via email',
  },
  {
    source: 'YOUR_REQUEST',
    help: 'Your request',
  },
  {
    source: 'REQUEST_STEP1',
    help: 'Your contact details',
  },
  {
    source: 'REQUEST_STEP2',
    help: 'Event specifications',
  },
  {
    source: 'REQUEST_STEP3',
    help: 'Special offers',
  },
  {
    source: 'PROCEED',
    help: 'Proceed',
  },
  {
    source: 'INCOMPLETE',
    help: 'Incomplete',
  },

  {
    source: 'AUTO_OFFER_TITLE',
    help: 'Receive a proposal immediately',
  },
  {
    source: 'AUTO_OFFER_CHOOSE',
    help: 'Select your preferences and receive a quote now! (without obligation)',
  },
  {
    source: 'WAIT_AUTO_OFFER',
    help: 'Your quote is being worked on, please wait a moment...',
  },
  {
    source: 'PRIVATE',
    help: 'Private event',
  },
  {
    source: 'COMPANY',
    help: 'Corporate event',
  },
  {
    source: 'WEDDING',
    help: 'Wedding',
  },
  {
    source: 'OTHER',
    help: 'Other',
  },

  {
    source: 'OFFER_REQUEST',
    help: 'Offer request',
  },
  {
    source: 'INTERESTED_IN_ACTS',
    help: "I'm interested in these acts",
  },
  {
    source: 'Q_WHATSAPP',
    help: 'How would you like to receive your offer?',
  },
  {
    source: 'A_WP_MAIL',
    help: 'Receive offer via WhatsApp + email',
  },
  {
    source: 'A_MAIL',
    help: 'Receive only via email',
  },

  /*
  {
    source: "IN_ALL_CATEGORIES",
    help: "in all categories"
  },
  {
    source: "WITHIN_CATEGORY",
    help: "within category"
  },
  {
    source: "ALL_RESULTS",
    help: "All results"
  },
  {
    source: "SPECIFY_OCCASION_AND_LOCATION",
    help: "Specify occasion & location"
  },
  {
    source: "PRICE",
    help: "Price"
  },
  {
    source: "CATEGORIES",
    help: "Categories"
  },
  {
    source: "CLEAR_ALL",
    help: "Clear all"
  },
  {
    source: "RESULT",
    help: "result"
  },
  {
    source: "RESULTS",
    help: "results"
  },
  {
    source: "IN",
    help: "in"
  },
  {
    source: "SELECTED_CATEGORY",
    help: "selected category"
  },
  {
    source: "CLEAR_ALL_FILTERS",
    help: "Clear all filters"
  },
  {
    source: "PRODUCT_NOT_AVAILABLE",
    help: "Product not available"
  },
  {
    source: "LOADING",
    help: "Loading..."
  },
  {
    source: "VIEW_ALL",
    help: "View all"
  },
  {
    source: "NO_RESULTS_FOUND",
    help: "No results found"
  },
  {
    source: "TRY_ADJUSTING_FILTERS",
    help: "Try adjusting your filters or choose a different category."
  },
  {
    source: "SET_PRICE",
    help: "Set price"
  },
  {
    source: "FILTERS",
    help: "Filters"
  },
  {
    source: "SHOW",
    help: "Show"
  },
  {
    source: "YOUR_OCCASION",
    help: "Your occasion"
  },
  {
    source: "WHAT_OCCASION_ORGANIZING",
    help: "What kind of occasion are you organizing?"
  },
  {
    source: "WHERE_EVENT_LOCATION",
    help: "Where does your event take place?"
  },
  {
    source: "LOCATION_HELPS_FIND_NEARBY",
    help: "The location helps us find entertainment near you and limit travel costs."
  },
  {
    source: "CANCEL",
    help: "Cancel"
  },
  {
    source: "CONFIRM",
    help: "Confirm"
  },
  {
    source: "FIND_PERFECT_ENTERTAINMENT",
    help: "Find the perfect entertainment for your event"
  },
  {
    source: "START_BY_SELECTING_OCCASION_LOCATION",
    help: "Start by selecting your occasion and location for personalized recommendations"
  },
  {
    source: "STEP_1_OCCASION",
    help: "Step 1: Occasion"
  },
  {
    source: "CHOOSE_EVENT_TYPE",
    help: "Choose your event type"
  },
  {
    source: "WHAT_EVENT_ORGANIZING",
    help: "What kind of event are you organizing?"
  },
  {
    source: "STEP_2_LOCATION",
    help: "Step 2: Location"
  },
  {
    source: "WHERE_TAKES_PLACE",
    help: "Where does it take place?"
  },
  {
    source: "WHERE_IS_EVENT",
    help: "Where is your event?"
  },
  {
    source: "SEARCH_CITY_POSTAL",
    help: "Search city or postal code..."
  },
  {
    source: "USE_CURRENT_LOCATION",
    help: "Use current location"
  },
  {
    source: "SEARCHING",
    help: "Searching..."
  },
  {
    source: "NO_LOCATIONS_FOUND",
    help: "No locations found"
  },
  {
    source: "START_HERE_PERSONALIZED_RESULTS",
    help: "Start here to see personalized results"
  },
  {
    source: "ONE_MORE_STEP_SELECT_LOCATION",
    help: "One more step! Select your location"
  },
  {
    source: "PERSONALIZED_MATCHES",
    help: "Personalized matches"
  },
  {
    source: "FIND_ENTERTAINMENT_PERFECT_FIT",
    help: "Find entertainment that perfectly fits your event"
  },
  {
    source: "AVAILABILITY_IN_REGION",
    help: "Availability in your region"
  },
  {
    source: "SEE_ARTISTS_CAN_TRAVEL",
    help: "See only artists who can travel to your location"
  },
  {
    source: "CUSTOM_PRICING",
    help: "Custom pricing"
  },
  {
    source: "GET_ACCURATE_PRICE_INDICATIONS",
    help: "Get accurate price indications for your specific situation"
  },
  {
    source: "SHOW_LESS",
    help: "Show less"
  },
  {
    source: "TO_LEFT",
    help: "To left"
  },
  {
    source: "TO_RIGHT",
    help: "To right"
  },
  {
    source: "CHOOSE_OCCASION",
    help: "Choose occasion"
  },
  {
    source: "ACTIVE_FILTERS",
    help: "Active filters"
  },
  {
    source: "MAIN_CATEGORY",
    help: "Main category"
  },
  {
    source: "ALL_CATEGORIES",
    help: "All categories"
  },
  {
    source: "RESET_FILTERS",
    help: "Reset filters"
  },
  {
    source: "CURRENT_LOCATION",
    help: "Current location"
  },
  {
    source: "CHOSEN_LOCATION",
    help: "Chosen location"
  },
  {
    source: "SEARCH_BY_PLACE_OR_CLICK_MAP",
    help: "Search by place name or click on the map"
  },
  {
    source: "SELECT_LOCATION",
    help: "Select location"
  },
  {
    source: "ENTER_PLACE_OR_POSTAL",
    help: "Enter a place or postal code"
  },
  {
    source: "CLEAR_LOCATION",
    help: "Clear location"
  },
  {
    source: "WHERE_IS_YOUR_EVENT",
    help: "Where is your event?"
  },
  {
    source: "SAVE",
    help: "Save"
  },
  {
    source: "ACTS_ABOVE_PRICE_OR_ON_REQUEST",
    help: "{{count}} act{{plural}} above €{{max}} or {{hasPlural}} a price on request"
  }*/
].map((r) => {
  if (!r.label) {
    r.label = r.source;
  }
  return r;
});

const localeFields = localeFieldsSet.map((g) => ({
  ...g,
  tab: 'locale',
  source: 'locale:' + g.source,
  type: 'longtext',
  multiline: true,
}));

module.exports = [
  {
    tab: 'general',
    type: 'color',
    label: 'Color 1',
    source: 'color_1',
    defaultColor: '#0088CC',
  },
  {
    tab: 'general',
    type: 'color',
    label: 'Color 2',
    source: 'color_2',
    defaultColor: '#2CA662',
  },
  {
    tab: 'general',
    type: 'color',
    label: 'Color 3',
    source: 'color_3',
    defaultColor: '#0D1112',
  },

  {
    tab: 'general',
    source: 'logo',
    label: 'Logo',

    type: 'select',
    choices: ['Evenses', 'Advocaathulp'].map((name) => ({
      id: name.toLowerCase(),
      name,
    })),
  },

  {
    tab: 'general',
    source: 'social_links',
    type: 'array',
    sub: [
      {
        source: 'type',
        label: 'Platform',
        type: 'select',
        choices: [
          'Facebook',
          'Twitter',
          'Youtube',
          'Instagram',
          'Linkedin',
          'Whatsapp',
        ].map((name) => ({
          id: name.toLowerCase(),
          name,
          icon: '/icons/social-' + name.toLowerCase() + '.svg',
        })),
      },
      {
        source: 'url',
        label: 'URL',
        type: 'text',
      },
    ],
  },
  {
    tab: 'general',
    source: 'phone_info',
    type: 'markdown',
    label: 'Contact info block',
  },
  {
    tab: 'general',
    source: 'footer_links',
    type: 'markdown',
    label: 'Extra links in footer',
  },
  {
    tab: 'general',
    source: 'no_results',
    type: 'markdown',
    label: 'No search results',
  },
  {
    tab: 'general',
    source: 'usp_quality',
    label: 'Usp: quality',
    type: 'text',
    multiline: true,
    help: 'Guaranteed quality',
  },
  {
    tab: 'general',
    source: 'usp_service',
    label: 'Usp: service',
    type: 'text',
    multiline: true,
    help: 'Personal service',
  },
  {
    tab: 'general',
    source: 'usp_guarantee',
    label: 'Usp: guarantee',
    type: 'text',
    multiline: true,
    help: 'Always-playing guarantee',
  },
  {
    tab: 'general',
    source: 'usp_experience',
    label: 'Usp: experience',
    type: 'text',
    multiline: true,
    help: '10.000+ events experience',
  },

  {
    tab: 'general',
    source: 'usps',
    label: 'Short USPs list (in sidebar and in order form)',
    type: 'array',
    sub: [
      {
        source: 'title',
        label: 'USP Text',
        type: 'text',
        multiline: true,
      },
    ],
  },

  {
    tab: 'general',
    label: 'Title for USP list on product page',
    source: 'usps_product_title',
    type: 'text',
  },
  {
    tab: 'general',
    source: 'usps_product_list',
    label: 'USP list on product page',
    type: 'array',
    sub: [
      {
        source: 'icon',
        type: 'reference',
        label: 'Icon',
        reference: {
          resource: 'icon',
          inputType: 'autocomplete',
          images: true,
        },
      },
      {
        label: 'Text',
        source: 'text',
        type: 'text',
      },
    ],
  },

  {
    tab: 'general',
    source: 'paymentMethods',
    label: 'Payment methods',
    type: 'checkboxes',
    choices: [
      { id: 'ideal', name: 'iDeal' },
      { id: 'bancontact', name: 'Bancontact' },
      { id: 'sofort', name: 'Sofort' },

      { id: 'creditcard', name: 'creditcard' },
      { id: 'paypal', name: 'Paypal' },
    ],
  },

  {
    source: 'discount',
    label: 'Discount deals',
    help: 'Price reduction per number of discount eligible products added. First entry here = 1 product added, the second = 2 products added, etc...',
    type: 'array',
    tab: 'general',
    sub: [
      {
        source: 'amount',
        label: 'Discount',
        type: 'number',
      },
    ],
  },

  {
    ...require('./groups/inherit.js'),
    tab: 'general',
  },

  {
    tab: 'settings',
    source: 'constants:siteName',
    label: 'Site name',
    type: 'text',
    help: 'Company name as shown in the browser title bar',
  },
  {
    tab: 'settings',
    source: 'constants:phone',
    label: 'Phone number',
    type: 'text',
  },
  {
    tab: 'settings',
    source: 'constants:phone_machine',
    label: 'Phone number machine format',
    type: 'text',
    help: 'with country code, no spaces or dashes. no plus. (e.g. 31012345678)',
  },
  {
    tab: 'settings',
    source: 'constants:currency',
    label: 'ISO 4217 Currency code',
    type: 'text',
  },
  {
    tab: 'settings',
    source: 'constants:mailbox',
    label: 'Email address that receives requests',
    type: 'email',
  },
  {
    tab: 'settings',
    source: 'constants:langcode',
    label: 'ISO 639-1 Language code',
    type: 'text',
  },
  {
    tab: 'settings',
    source: 'constants:rangeMin',
    label: 'Minimum in price range filter',
    type: 'number',
  },
  {
    tab: 'settings',
    source: 'constants:rangeMax',
    label: 'Maximum in price range filter',
    type: 'number',
  },
  {
    tab: 'settings',
    source: 'constants:decimalSeparator',
    label: 'Decimal separator in all numbers',
    type: 'text',

    help: '(, or .)',
  },
  {
    tab: 'settings',
    source: 'constants:moneyFormat',
    label: 'Money format',
    type: 'text',

    help: "# = number, * = currency symbol (e.g.: '# *', '* #', '#*', '*#')",
  },
  {
    tab: 'settings',
    source: 'constants:searchPath',
    label: 'Search path prefix',
    type: 'text',

    help: 'search',
  },

  /*{
    tab: "settings",
    source: "constants:ua",
    label: "Google Analytics UA code",
    type: "text"
  },*/

  {
    tab: 'address',
    source: 'address:streetAddress',
    label: 'Street + nr',
    type: 'text',
  },
  {
    tab: 'address',
    source: 'address:addressLocality',
    label: 'City',
    type: 'text',
  },
  {
    tab: 'address',
    source: 'address:postalCode',
    label: 'Postal code',
    type: 'text',
  },
  {
    tab: 'address',
    source: 'address:addressCountry',
    label: 'Country',
    type: 'text',
  },

  ...localeFields,

  {
    tab: 'mail',
    label: 'Request confirmation to customer',
    type: 'array',
    source: 'mail:customer_order',
    min: 1,
    max: 1,
    sub: [
      {
        label: 'Title',
        source: 'title',
        type: 'text',
      },
      {
        label: 'Message',
        source: 'body',
        type: 'markdown',
        help: 'Available tokens: [name] [email] [phone] [products] [affiliate_products]',
      },
      {
        label: "SMS: 'From' name",
        source: 'sms_from',
        type: 'text',
      },
      {
        label: 'SMS: message',
        source: 'sms_body',
        type: 'longtext',
        multiline: true,
        help: 'Available tokens: [name] [email] [phone]',
      },
    ],
  },

  {
    tab: 'additional_services',
    source: 'additional_service_description',
    label: 'Description above additional services (order step 3)',
    type: 'longtext',
    help: 'Description on top',
  },
  {
    tab: 'additional_services',
    source: 'additional_service_options',
    label: 'Additional services',
    type: 'array',
    sub: [
      {
        source: 'text',
        label: 'Text',
        type: 'longtext',
      },
      {
        source: 'image',
        label: 'Image',
        type: 'image',
        accept: {
          'image/jpeg': true,
          'image/webp': 'jpg',
          'image/png': 'jpg',
        },
        /* transforms: {
          _original: {
            width: 450,
            height: 300
          }
        }*/
      },

      {
        label: 'Email to customer: Title',
        source: 'title',
        type: 'text',
      },
      {
        label: 'Email to customer: Message',
        source: 'body',
        type: 'markdown',
        help: 'Available tokens: [name] [email] [phone] [affiliate_products]',
      },
    ],
  },
];

