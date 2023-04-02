import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Items from './components/Items.tsx';
import Basket from './components/Basket.tsx';
import Categories from './components/Categories.tsx';
import Filter from './components/Filter.tsx';
import ShowFullItem from './components/ShowFullItem.tsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
      orders: [],

      currentItems: [],
      items: [
        {
          id: '1',
          img: 'aos-img.png',
          title: 'AOS средство для мытья посуды Crystal',
          size: '450 мл',
          barcode: '4604049097548',
          maker: 'Нэфис',
          brand: 'AOS',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.',
          price: '49.76 ₸',
          category: 'all'
        },
        {
          id: '2',
          img: 'ariel.png',
          title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
          size: '15X28.8 г',
          barcode: '4604049097649',
          maker: 'ARIEL',
          brand: 'ARIEL',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.',
          price: '48.76 ₸',
          category: 'all',
          category: 'hygienic products'          
        },
        {
          id: '3',
          img: 'bimax.png',
          title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
          size: '1500 г',
          barcode: '4506049097649',
          maker: 'BIMAX',
          brand: 'BIMAX',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.',
          price: '100.00 ₸',
          category: 'all',
          category: 'hygienic products'      
        },
        {
          id: '4',
          img: 'sorti.png',
          title: 'AOS Ср-во для мытья посуды Апельсин+мята',
          size: '450 мл',
          barcode: '4604049697548',
          maker: 'Sorti',
          brand: 'AOS',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.',
          price: '50.76 ₸',
          category: 'all'   
        },
        {
          id: '5',
          img: 'biomio.png',
          title: 'BioMio BIO-SOAP Экологичное туалетное мыло....',
          size: '90 г',
          barcode: '4516049097649',
          maker: 'BioMio',
          brand: 'BioMio',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis.',
          price: '38.76 ₸',
          category: 'all',
          category: 'hygienic products'      
        },
        {
          id: '6',
          img: 'yves-rosher.png',
          title: 'Масло-Эксфолиант для Рук',
          size: '75 мл',
          barcode: '68729',
          maker: 'YVES ROSHER',
          brand: 'YVES ROSHER',
          desc: 'Мягкая и гладкая кожа рук всего за 1 минуту.',
          price: '499 ₸',
          category: 'all',
          category: 'hand care'     
        },
        {
          id: '7',
          img: 'milk-for-body.png',
          title: 'Молочко для Тела «Манго & Кориандр»',
          size: '390 мл',
          barcode: '90829',
          maker: 'YVES ROSHER',
          brand: 'YVES ROSHER',
          desc: 'Тонизирующий и экзотический аромат Манго и Кориандра.',
          price: '419.01 ₸',
          category: 'all',
          category: 'body care'      
        },
        {
          id: '8',
          img: 'milk-for-body-2.png',
          title: 'Молочко для Тела «Кокосовый Орех»',
          size: '390 мл',
          barcode: '91725',
          maker: 'YVES ROSHER',
          brand: 'YVES ROSHER',
          desc: 'Чтобы подарить вам удовольствие от чувственной текстуры и манящего сливочного аромата, Эксперты Растительной Косметики Ив Роше объединили органическое масло Карите БИО и экстракт Кокоса. Молочко для тела увлажнит вашу кожу и окутает ее нежным ароматом.',
          price: '419.01 ₸',
          category: 'all',
          category: 'body care'
        },
        {
          id: '9',
          img: 'strawberry-soap.png',
          title: 'Мыло «Лесная Земляника»',
          size: '80 г',
          barcode: '44214',
          maker: 'YVES ROSHER',
          brand: 'YVES ROSHER',
          desc: 'Необыкновенно ароматное мыло на основе экстракта Лесной Земляники мягко очищает кожу, образуя легкую воздушную пену. Подарите себе моменты лакомого наслаждения! Его +: Формула содержит более 99% компонентов натурального происхождения. Без консервантов. Биоразлагаемая формула. Без парабенов.',
          price: '41.76 ₸',
          category: 'all',
          category: 'hygienic products'        
        },
        {
          id: '10',
          img: 'for-foot.png',
          title: 'Гель для Усталых Ног',
          size: '200 мл',
          barcode: '72397',
          maker: 'YVES ROSHER',
          brand: 'YVES ROSHER',
          desc: 'Гель с ультраосвежающей текстурой мгновенно снимает напряжение и усталость с ног, дарит ощущение легкости и комфорта благодаря экстракту Лютичного Чистяка, оказывающему расслабляющее действие.',
          price: '799.16 ₸',
          category: 'all',
          category: 'foot care'      
        },
        {
          id: '11',
          img: 'sun.png',
          title: 'Солнцезащитное Молочко для Тела SPF 50+',
          size: '150 мл',
          barcode: '69393',
          maker: 'YVES ROSHER',
          brand: 'YVES ROSHER',
          desc: 'Откройте для себя Солнцезащитное Молочко-Спрей для Тела SPF 50 с бархатистой текстурой эффективно защищает кожу тела от негативного воздействия UVA/UVB лучей и увлажняет ее благодаря экстракту Синеголовника Приморского, который стимулирует в коже естественные механизмы защиты от солнечных лучей и защищает ее от фотостарения.Не содержит красителей, минеральных масел и парабенов. Пластиковый флакон подлежит вторичной переработке, упаковка содержит переработанный пластик.',
          price: '119.24 ₸',
          category: 'all',
          category: 'tanning products'     
        },
        {
          id: '12',
          img: 'for-face.png',
          title: 'Steblanc эмульсия лифтинг для лица с коллагеном',
          size: '15 мл',
          barcode: '19010157190',
          maker: 'STEBLANC',
          brand: 'STEBLANC',
          desc: 'Глубокое увлажнение и питание. Регенерация и восстановление эпидермального барьера. Восстановление гидро-липидного баланса кожи. Восстановление эластичности и упругости кожных покровов.',
          price: '178.78 ₸',
          category: 'all',
          category: 'facial care'       
        },
        {
          id: '13',
          img: 'for-face-2.png',
          title: 'Steblanc сыворотка лифтинг для лица с коллагеном',
          size: '50 мл',
          barcode: '19010157390',
          maker: 'STEBLANC',
          brand: 'STEBLANC',
          desc: 'Глубокое и пролонгированное увлажнение. Восстановление гидро-липидного баланса кожи. Блок инволюционных изменений. Восстановление эластичности и упругости кожных покровов. Лифтинг кожи.',
          price: '208.46 ₸',
          category: 'all',
          category: 'facial care' 
        },
        {
          id: '14',
          img: 'gift-1.png',
          title: 'Набор ЛОШАДИНАЯ СИЛА "Буренка - Питательный уход"',
          size: '100 мл',
          barcode: '4604697548',
          maker: 'HORSE FORCE',
          brand: 'HORSE FORCE',
          desc: 'Лошадиная сила Буренка крем для лица питательный с Фитофлораном и пептидами  -кремообразная масса белого цвета с приятным ароматом. Идеально подходит для борьбы с возрастными изменениями кожи, чувствительной, сухой, увядающей, проблемной, склонной к раздражению, покраснению и шелушению кожи, питая и увлажняя ее. Универсальное средство для всего тела.',
          price: '645.8 ₸',
          category: 'all',
          category: 'gift sets'  
        },
        {
          id: '15',
          img: 'for-lips.png',
          title: 'Medipharma cosmetics hyaluron бальзам для объема губ розовый 7 мл',
          size: '7 мл',
          barcode: '45160490777749',
          maker: 'MEDIPHARMA COSMETICS',
          brand: 'MEDIPHARMA COSMETICS',
          desc: 'Смягчает и увлажняет кожу губ, а также сглаживает мелкие морщины  за счет гиалуроновой кислоты. Комплекс липидов ухаживает за кожей губ,  способствует видимому увеличению их объема. Бальзам придает губам легкий блеск и  нежный розовый оттенок.',
          price: '41.76 ₸',
          category: 'all',
          category: 'oral hygiene'       
        },
        {
          id: '16',
          img: 'shampoo.png',
          title: 'Garnier fructis sos восстановление шампунь 250 мл',
          size: '250 мл',
          barcode: '469049097548',
          maker: 'Garnier',
          brand: 'Garnier',
          desc: 'Шампунь Garnier Fructis SOS восстановление, укрепляющий для секущихся и очень поврежденных волос содержит растительный протеин Керафил + Масло Амлы.',
          price: '325.7 ₸',
          category: 'all',
          category: 'hair care'        
        },
        {
          id: '17',
          img: 'shampoo-2.png',
          title: 'Klorane порошковый шампунь-маска 2 в 1 с экстрактом крапивы и глины',
          size: '3 г',
          barcode: '460997649',
          maker: 'KLORANE',
          brand: 'KLORANE',
          desc: 'Порошковый шампунь-маска 2в1 Клоран с экстрактом Крапивы и Глины обеспечит чистоту и свежесть волос на 48 часов. Средство регулирует себовыделение, поглощает излишки кожного жира и бережно смывает загрязнения.',
          price: '608.16 ₸',
          category: 'all',
          category: 'hair care'   
        },
        {
          id: '18',
          img: 'for-hand.png',
          title: 'Floresan magic hands крем для рук омолаживающий 250 мл',
          size: '250 мл',
          barcode: '450454549',
          maker: 'FLORESAN',
          brand: 'FLORESAN',
          desc: 'Масло авокадо, обладая антиоксидантными свойствами, защищает кожу от старения, предупреждает образование возрастных пигментных пятен и усиливает регенерацию.',
          price: '101.06 ₸',
          category: 'all',
          category: 'hand care'  
        },
        {
          id: '19',
          img: 'for-foot-1.png',
          title: 'U dry дезодорант для ног 10 шт. пак',
          size: '10 шт',
          barcode: '4604047787878548',
          maker: 'U DRY',
          brand: 'U DRY',
          desc: 'Эффективное средство от потливости и запаха ног, грибковой инфекции. Дезинфицирует кожу ступней, подавляя жизнедеятельность грибков и бактерий, охлаждает и способствует регенерации повреждений.',
          price: '209.71 ₸',
          category: 'all',
          category: 'hygienic products'        
        },
        {
          id: '20',
          img: 'gift-2.png',
          title: 'Nesti dante philosophia мыло философия 6x150 гр/набор/',
          size: '150 г',
          barcode: '45160495656549',
          maker: 'NESTI DANTE',
          brand: 'NESTI DANTE',
          desc: 'Линия душистого мыла Философия - естественная красота, гармония с природой, радость жизни и роскошь ароматов. В подарочном наборе собраны шесть ароматных кусочков мыла, они нежно очищают кожу, делают ее мягкой и шелковистой.',
          price: '1005.76 ₸',
          category: 'all',
          category: 'gift sets'   
        },
        {
          id: '21',
          img: 'gift-3.png',
          title: 'PREPARFUMER DE FRANCE № 1 НАБОР ИЗ ПЯТИ КРЕМОВ',
          size: '75 мл',
          barcode: '451333549',
          maker: 'PATRICEM',
          brand: 'PATRICEM',
          desc: 'Набор предназначен для ухода за кожей лица, зоны декольте, рук и ног. А один из кремов раскрывает секрет французских модниц, которые целый день без усталости, могут ходить на каблуках. Каждый из кремов в составе набора решает конкретную проблему и помогает делать это максимально быстро и эффективно.',
          price: '1705.76 ₸',
          category: 'all',
          category: 'gift sets'  
        },
        {
          id: '22',
          img: 'sun-2.png',
          title: 'Medipharma cosmetics hyaluron крем для лица солнцезащитный spf30 50 мл',
          size: '50 мл',
          barcode: '4513335000049',
          maker: 'MEDIPHARMA COSMETICS',
          brand: 'MEDIPHARMA COSMETICS',
          desc: 'Солнцезащитный крем для лица Hyaluron защищает от интенсивного воздействия солнечных лучей, предотвращает преждевременное старение и увлажняет кожу.',
          price: '805.7 ₸',
          category: 'all',
          category: 'tanning products'
        },
        {
          id: '23',
          img: 'hygiene.png',
          title: 'Drydry classic средство длительного действия от обильного потоотделения 35 мл',
          size: '35 мл',
          barcode: '35000049',
          maker: 'DRYDRY',
          brand: 'DRYDRY',
          desc: 'Эффективное средство от потоотделения DRYDRY Classic оказывает антибактериальный эффект, тем самым препятствуя образованию неприятного запаха.',
          price: '797 ₸',
          category: 'all',
          category: 'hygienic products'      
        },
        {
          id: '24',
          img: 'for-man.png',
          title: 'L’oreal paris мэн эксперт уход увлажняющий 24 ч гидра энергетик 50 мл',
          size: '50 мл',
          barcode: '35077700049',
          maker: 'L’OREAL',
          brand: 'L’OREAL',
          desc: 'Ежедневно наносите крем на очищенную кожу лица энергичными массирующими движениями. При использовании после бритья уменьшает ощущение жжения и покраснение.',
          price: '708.18 ₸',
          category: 'all',
          category: 'shaving products'       
        },
        {
          id: '25',
          img: 'for-mouth.png',
          title: 'Афтофикс средство гигиены полости рта 10 г',
          size: '10 г',
          barcode: '676735077700049',
          maker: 'AphtoFix',
          brand: 'AphtoFix',
          desc: 'АфтоФикс предназначен для применения при различного рода повреждениях слизистой полости рта или десен. Например, из-за термических ожогов, механических повреждений, после стоматологических вмешательств, натертостей от брекет-систем или зубных протезов, воспалений.',
          price: '823 ₸',
          category: 'all',
          category: 'oral hygiene',
               
        },
        {
          id: '26',
          img: 'tools.png',
          title: 'Mon rulon бумага туалетная влажная 80 шт.',
          size: '80 шт',
          barcode: '547350777',
          maker: 'MON RULON',
          brand: 'MON RULON',
          desc: 'Создает ощущение свежести и комфорта,содержит экстракт ромашки который оказывает противовоспалительное и антибактериальное воздействие,не раздражает даже чувствительную кожу.',
          price: '110 ₸',
          category: 'all',
          category: 'paper products',
                
        }
      ],

      showFullItem: false,
      fullItem: {}
    }


    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)

    this.state.currentItems = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)

    this.chooseFilter = this.chooseFilter.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }

  render () {
    return (
        <div className="wrapper">
           <Header orders={this.state.orders} onDelete={this.deleteOrder} />

            <Categories chooseCategory={this.chooseCategory} />
            <Filter chooseFilter={this.chooseFilter} />
            <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

            {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
            <Footer />
        </div>
      );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true;
      }
    })
    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }

  chooseFilter(brand) {
    this.setState({
      currentItems: this.state.items.filter(el => el.brand === brand)
    })
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  
}



export default App;
