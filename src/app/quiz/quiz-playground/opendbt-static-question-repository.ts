
import { firstValueFrom } from 'rxjs';
import { OpentdbQuestionsResponse } from './opentdb-questions-response';
import { QuizQuestion } from "../../../domain/quiz-question";
import { QuizQuestionRepository } from "../../../domain/quiz-quesiton-repository";
import { HttpClient } from '@angular/common/http';


const exampleResponse = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "What character was once considered to be the 27th letter of the alphabet?",
      "correct_answer": "Ampersand",
      "incorrect_answers": [
        "Interrobang",
        "Tilde",
        "Pilcrow"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "Where is Apple Inc. headquartered?",
      "correct_answer": "Cupertino, California",
      "incorrect_answers": [
        "Redwood City, California",
        "Redmond, Washington",
        "Santa Monica, CA"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "What is the name of the popular animatronic singing fish prop, singing such hits such as &quot;Don&#039;t Worry, Be Happy&quot;?",
      "correct_answer": "Big Mouth Billy Bass",
      "incorrect_answers": [
        "Big Billy Bass",
        "Singing Fish",
        "Sardeen"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "What is the romanized Chinese word for &quot;airplane&quot;?",
      "correct_answer": "Feiji",
      "incorrect_answers": [
        "Qiche",
        "Zongxian",
        "Huojian"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What do the letters of the fast food chain KFC stand for?",
      "correct_answer": "Kentucky Fried Chicken",
      "incorrect_answers": [
        "Kentucky Fresh Cheese",
        "Kibbled Freaky Cow",
        "Kiwi Food Cut"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "Terry Gilliam was an animator that worked with which British comedy group?",
      "correct_answer": "Monty Python",
      "incorrect_answers": [
        "The Goodies&lrm;",
        "The League of Gentlemen&lrm;",
        "The Penny Dreadfuls"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "If you planted the seeds of Quercus robur, what would grow?",
      "correct_answer": "Trees",
      "incorrect_answers": [
        "Grains",
        "Vegetables",
        "Flowers"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What word represents the letter &#039;T&#039; in the NATO phonetic alphabet?",
      "correct_answer": "Tango",
      "incorrect_answers": [
        "Target",
        "Taxi",
        "Turkey"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What is Tasmania?",
      "correct_answer": "An Australian State",
      "incorrect_answers": [
        "A flavor of Ben and Jerry&#039;s ice-cream",
        "A Psychological Disorder",
        "The Name of a Warner Brothers Cartoon Character"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "What does a milliner make and sell?",
      "correct_answer": "Hats",
      "incorrect_answers": [
        "Shoes",
        "Belts",
        "Shirts"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
      "correct_answer": "Fiat",
      "incorrect_answers": [
        "Maserati",
        "Alfa Romeo",
        "Ferrari"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "What type of dog is &#039;Handsome Dan&#039;, the mascot of Yale University?",
      "correct_answer": "Bulldog",
      "incorrect_answers": [
        "Yorkshire Terrier",
        "Boxer",
        "Pug"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
      "correct_answer": "OCBC",
      "incorrect_answers": [
        "HSBC",
        "Standard Chartered",
        "Bank of China"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "The Quadrangularis Reversum is best described as which of the following?",
      "correct_answer": "A percussion instrument",
      "incorrect_answers": [
        "A building in Oxford University",
        "A chess move",
        "A geometric theorem"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "What was the destination of the missing flight MH370?",
      "correct_answer": "Beijing",
      "incorrect_answers": [
        "Kuala Lumpur",
        "Singapore",
        "Tokyo"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "What is the name of the Jewish New Year?",
      "correct_answer": "Rosh Hashanah",
      "incorrect_answers": [
        "Elul",
        "New Year",
        "Succoss"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "Which sign of the zodiac comes between Virgo and Scorpio?",
      "correct_answer": "Libra",
      "incorrect_answers": [
        "Gemini",
        "Taurus",
        "Capricorn"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "What is the currency of Poland?",
      "correct_answer": "Z\u0142oty",
      "incorrect_answers": [
        "Ruble",
        "Euro",
        "Krone"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "Located in Chile, El Teniente is the world&#039;s largest underground mine for what metal?",
      "correct_answer": "Copper",
      "incorrect_answers": [
        "Iron",
        "Nickel",
        "Silver"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "The likeness of which president is featured on the rare $2 bill of USA currency?",
      "correct_answer": "Thomas Jefferson",
      "incorrect_answers": [
        "Martin Van Buren",
        "Ulysses Grant",
        "John Quincy Adams"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "This field is sometimes known as &ldquo;The Dismal Science.&rdquo;",
      "correct_answer": "Economics",
      "incorrect_answers": [
        "Philosophy",
        "Politics",
        "Physics"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "Which sign of the zodiac is represented by the Crab?",
      "correct_answer": "Cancer",
      "incorrect_answers": [
        "Libra",
        "Virgo",
        "Sagittarius"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "Which of the following is an existing family in &quot;The Sims&quot;?",
      "correct_answer": "The Goth Family",
      "incorrect_answers": [
        "The Family",
        "The Simoleon Family",
        "The Proud Family"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "The website &quot;Shut Up &amp; Sit Down&quot; reviews which form of media?",
      "correct_answer": "Board Games",
      "incorrect_answers": [
        "Television Shows",
        "Video Games",
        "Films"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "General Knowledge",
      "question": "The Swedish word &quot;Grunka&quot; means what in English?",
      "correct_answer": "Thing",
      "incorrect_answers": [
        "People",
        "Place",
        "Pineapple"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "What direction does the Statue of Liberty face?",
      "correct_answer": "Southeast",
      "incorrect_answers": [
        "Southwest",
        "Northwest",
        "Northeast"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "Apple co-founder Steve Jobs died from complications of which form of cancer?",
      "correct_answer": "Pancreatic",
      "incorrect_answers": [
        "Bone",
        "Liver",
        "Stomach"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "Which item of clothing is usually worn by a Scotsman at a wedding?",
      "correct_answer": "Kilt",
      "incorrect_answers": [
        "Skirt",
        "Dress",
        "Rhobes"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "General Knowledge",
      "question": "Which country drives on the left side of the road?",
      "correct_answer": "Japan",
      "incorrect_answers": [
        "Germany",
        "Russia",
        "China"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "General Knowledge",
      "question": "The drug cartel run by Pablo Escobar originated in which South American city?",
      "correct_answer": "Medell&iacute;n",
      "incorrect_answers": [
        "Bogot&aacute;",
        "Quito",
        "Cali"
      ]
    }
  ]
};

export class OpentdbStaticQuestionRepository implements QuizQuestionRepository {
  constructor(private http: HttpClient) { }

  async getMany(limit: number): Promise<QuizQuestion[]> {
    const response = exampleResponse;

    if (response.response_code !== 0) {
      throw new Error('Failed to fetch questions. Response code: ' + response.response_code);
    }

    return response.results.slice(0, limit).map(result => new QuizQuestion(
      this.unescapeHtmlSpecialChars(result.question),
      this.unescapeHtmlSpecialChars(result.correct_answer),
      result.incorrect_answers.map(incorrectAnswer => this.unescapeHtmlSpecialChars(incorrectAnswer)),
    ));
  }

  private unescapeHtmlSpecialChars(str: string) {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div.innerText;
  }
}