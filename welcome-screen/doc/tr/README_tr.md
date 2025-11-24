# Karşılama Ekranı Projesi

---

## 🎯 Amaç

Bu proje, kullanıcıların kendi adlarını girmelerine ve kişiselleştirilmiş bir karşılama mesajı görmelerine olanak tanıyan bir JavaScript Karşılama Ekranıdır. Amacı, kullanıcı girdisinin nasıl yakalanabileceğini ve bir web sayfasında dinamik olarak nasıl gösterilebileceğini kanıtlayan basit ve etkileşimli bir giriş ekranı oluşturmaktır.

---

## 🛠 Kullanılan Teknolojiler

**HTML5 –>** Karşılama ekranının ve giriş formunun yapısını sağlar.

**CSS3 –>** Arayüzü görsel olarak çekici hale getirmek için stillendirir.

**JavaScript (ES6) –>** Kullanıcı girdilerini işler, kişiselleştirilmiş bir karşılama mesajı üretir ve web sayfasını dinamik olarak günceller.

---

## 📚 Ne Öğrendim ?

1. **Var, let ve const ile değişken tanımlamanın bazı farkları var ;**

- var (ES5) – Fonksiyon kapsamına sahip, aynı kapsamda tekrar tanımlanabilir.

- let (ES6) – Blok kapsamına sahip, aynı kapsamda tekrar tanımlanamaz.

- const (ES6) – Blok kapsamına sahip, tekrar tanımlanamaz ve değeri değiştirilemez.

2. **Aritmetik Operatörler :**

- Toplama: +
- Çıkarma: -
- Çarpma: \*
- Üs Alma: \*\*
- Bölme: /
- Mod Alma: %
- Arttırma: ++
- Eksiltme: --

3. **Arttırma (++) ve Azaltma (--) Operatörlerini Neden Kullanırız?**

- Arttırma (++) ve azaltma (--) operatörleri, bir değişkenin değerini tam sayı bazında bir birim artırmak veya azaltmak için kullanılan özel unary operatörlerdir.

  - Unary operatör, tek bir değere veya değişkene uygulanan operatör demektir. Yani işlem yapmak için sadece bir öğe kullanır.

- Kodun okunabilirliğini artırır: count = count + 1 yerine count++ daha temizdir.

- JavaScript motorları tarafından optimize edildiği için döngülerde performans sağlar.

- Prefix/Postfix yapıları sayesinde kullanım sırasında esneklik sunar:

  - i++ → önce değeri kullanır, sonra artırır

  - ++i → önce artırır, sonra kullanır

4. **JavaScript’te sayıları yuvarlamak için Math nesnesi altında üç temel metot bulunur:**

- Math.floor() – Aşağı yuvarlama :

  - Sayıyı bir alt tam sayıya yuvarlar.
    Math.floor(1.9); // → 1
    Math.floor(5.7); // → 5

- Math.ceil() – Yukarı yuvarlama

  - Sayıyı bir üst tam sayıya yuvarlar.
    Math.ceil(1.9); // → 2
    Math.ceil(5.1); // → 6

- Math.round() – En yakın tam sayıya yuvarlama

  - Sayıyı en yakın tam sayıya yuvarlar.
    Ondalık kısmı 0.5 ve üzeri → yukarı
    0.5’in altı → aşağı
    Math.round(1.4); // → 1
    Math.round(1.5); // → 2
    Math.round(5.7); // → 6

5. **typeof ile Kontrol Edilebilecek Veri Türleri**
   _typeof ve veri türlerini bilmek, kodun güvenli, anlaşılır ve hatasız çalışmasını sağlar._

- number → Sayılar

  > `let age = 25;`  
  > `let price = 19.99;`  
  > `console.log(typeof age); // → "number"`

- string → Metin değerleri

  > `let name = "Büşra";`  
  > `console.log(typeof name); // → "string"`

- boolean → Doğru (true) veya yanlış (false) değerler

  > `let isActive = true;`  
  > `console.log(typeof isActive); // → "boolean"`

- undefined → Tanımlanmamış değişkenler

  > `let data;`  
  > `console.log(typeof data); // → "undefined"`

- object → Nesneler, diziler ve null (istisna)

  > `let user = { name: "Ali", age: 30 };`  
  > `let arr = [1, 2, 3];`  
  > `console.log(typeof user); // → "object"`  
  > `console.log(typeof arr); // → "object"`  
  > `console.log(typeof null); // → "object" (JS istisnası)`

- function → Fonksiyonlar

  > `function greet() { return "Hello"; }`  
  > `console.log(typeof greet); // → "function"`

- symbol → Benzersiz ve değiştirilemez değerler (ES6+)

  > `let sym = Symbol("id");`  
  > `console.log(typeof sym); // → "symbol"`

- bigint → Çok büyük tam sayılar (ES2020+)

  > `let big = 123456789012345678901234567890n;`  
  > `console.log(typeof big); // → "bigint"`

6. **Değişken Türünü Değiştirmek (Type Coercion)**

- _JavaScript’te değişkenler bazen otomatik veya manuel olarak başka veri türüne dönüşebilir._

  - Otomatik Dönüşüm (Implicit Coercion) : JavaScript bazı işlemlerde tipi kendiliğinden değiştirir.

    > `let a = "5";`  
    > `let b = 2;`  
    > `console.log(a + b); // → "52" (string + number → string)`  
    > `console.log(a * b); // → 10 (string * number → number)`

- Manuel Dönüşüm (Explicit Coercion)

  - _Geliştirici değişkenin tipini açıkça değiştirir._

    > `let str = "123";`  
    > `let num = Number(str);  // string → number`  
    > `console.log(num);       // → 123`

    > `let text = String(456); // number → string`  
    > `console.log(text);      // → "456"`

- _Hesaplamalarda doğru sonuç almak, kullanıcıdan gelen verileri doğru tipte işlemek ve hata ve beklenmedik sonuçları önlemek için önemli_

7. **Template Literals & Interpolation**

- Template Literals (şablon stringleri), ES6 ile gelen ve stringleri daha okunabilir ve esnek yazmamızı sağlayan bir özelliktir. Backtick ` karakteri ile tanımlanır ve ${} ile değişkenler veya ifadeler string içine gömülebilir (interpolation).

> `let name = "Büşra";`  
> `let age = 25;`

> `// Geleneksel string birleştirme`  
> `console.log("Merhaba " + name + ", yaşın " + age + "!");`

> `// Template Literal ile`  
> `console.log(\`Merhaba \${name}, yaşın \${age}!\`);`

- Template Literals, kodu daha okunabilir ve temiz yapar, çok satırlı string yazmayı kolaylaştırır ve değişkenleri ${} ile kolayca string içine gömmeye imkân sağlar.

8. **DOM Manipülasyonu (Temel Metotlar)**

- `getElementById(id)` : Belirli bir id değerine sahip HTML öğesini seçer. Tek bir öğe döndürür.

- `querySelector(selector)` : CSS seçici mantığıyla ilk eşleşen öğeyi seçer. Daha esnek ve güçlü bir seçim yöntemidir.

- `classList` : Bir öğenin sınıf listesi üzerinde işlem yapmayı sağlar. Sık kullanılan metodlar:

  - `add(className)` → sınıf ekler
  - `remove(className)` → sınıf siler
  - `toggle(className)` → varsa siler, yoksa ekler
  - `contains(className)` → sınıf var mı kontrol eder

9. **prompt() Kullanımı**

- prompt() metodu, kullanıcıya bir soru sorup klavyeden girdi almayı sağlayan etkileşimli bir window metodudur. Girilen değer, bir değişkene atanarak daha sonra kullanılabilir.
  - İlk parametre: Kullanıcıya gösterilecek soru
  - İkinci parametre (opsiyonel): Girdi kutusunda görünen varsayılan değer veya rehber metin
  - prompt() sonucu string olarak döner ve bir değişkene atanabilir
  - Kullanıcı “Tamam” tuşuna basarsa girdi alınır, “İptal” tuşuna basarsa null döner
  - Bu şekilde kullanıcıdan alınan bilgi ile sayfa üzerinde dinamik işlemler yapmak mümkün olur.

10. **Karşılaştırma Operatörleri**

Karşılaştırma operatörleri, değişkenler veya değerler arasındaki eşitlik ve farkı kontrol eder ve _true_ veya _false_ döner.

- `==` : İki değer eşitse true döner, tip dönüşümü yapılabilir.
- `===` : Hem değer hem tür eşitse true döner.
- `!=` : İki değer eşit değilse true döner.
- `!==` : Hem değer hem tür eşit değilse true döner.
- `<` : Sol değer sağ değerden küçükse true döner.
- `<=` : Sol değer sağ değerden küçük veya eşitse true döner.
- `>` : Sol değer sağ değerden büyükse true döner.
- `>=` : Sol değer sağ değerden büyük veya eşitse true döner.

---

11. **Mantıksal Operatörler**

Mantıksal operatörler birden fazla koşulu birleştirmek için kullanılır ve sonuç _true_ veya _false_ döner.

- `&&` : VE → Tüm koşullar doğru ise true döner.
- `||` : VEYA → En az bir koşul doğru ise true döner.
- `!` : DEĞİL → Boolean değerini tersine çevirir.

12. **Koşul Yapısı Kullanımı (if / else)**

- JavaScript’te koşulların doğruluğunu kontrol etmek ve duruma göre farklı kod blokları çalıştırmak için `if`, `else if` ve `else` yapıları kullanılır.

- _if:_ Koşul doğruysa çalışır.
- _else if:_ Önceki koşullar sağlanmazsa alternatif koşul eklemek için kullanılır.
- _else:_ Hiçbir koşul sağlanmazsa çalışır.

- Bu yapı; karar verme, değer karşılaştırma, doğrulama ve kullanıcı girdisine göre işlem yapma gibi birçok senaryoda temel kontrol mekanizması sağlar. Tek satırlık işlemlerde süslü parantezler opsiyoneldir.

13. **Çoklu Koşul Yapısı Kullanımı (Switch)**

- JavaScript’te çok sayıda koşul içeren durumlarda `if/else if` yapısı kodun okunabilirliğini düşürebilir. Bu gibi durumlarda daha düzenli bir yapı olan _switch_ tercih edilir.

- Switch yapısı, bir değişkenin değerine göre hangi kod bloğunun çalışacağını belirler.

  - `switch` ifadesine bir değer veya değişken yazılır.
  - Her olası durum için `case` etiketleri kullanılır.
  - Bir case’in çalışması bittikten sonra akışı durdurmak için `break` yazılır.
  - Değer hiçbir case ile eşleşmezse `default` bloğu çalışır.

- Switch yapısında karşılaştırmalar _===_ (hem değer hem tip kontrolü) mantığıyla yapılır, yani otomatik tip dönüşümü olmaz.

- Bu yapı; menü sistemleri, kullanıcı seçimleri, çoklu durum kontrolü ve belirli bir değere göre farklı işlemlerin yapılması gereken tüm senaryolarda kullanılır.

14. **Ternary Operator (Üçlü Operatör)**

- Ternary operator, JavaScript’te _3 parametre alan tek operatördür_ ve if/else yapısına göre daha kısa bir yazım sunar.

Ternary yapısı şu sırayla çalışır:

1. _Koşul (condition)_ yazılır → `?`
2. Koşul _doğru_ ise çalışacak ifade → `:`
3. Koşul _yanlış_ ise çalışacak ifade

Genel kullanım:

- koşul ? doğruysa : yanlışsa
- JavaScript’te bir ifadenin _false_ kabul edilmesine neden olan değerler şunlardır:  
  _false, null, NaN, 0, "", undefined_
  Bu değerlerden biri koşulda kullanıldığında sonuç otomatik olarak _yanlış_ sayılır.

- Ternary Operator Zincirleme (Chaining)

  - Ternary operatörü, birden fazla durumu kontrol etmek istediğimizde _zincirleme (chaining)_ olarak da kullanılabilir. Bu sayede farklı olasılıkları tek satırda değerlendirip uygun sonucu döndürmek mümkün olur. Bu yöntem, özellikle kısa kontrollerde kodun temiz ve anlaşılır kalmasını sağlar.

- Ternary operator, if/else yapılarına daha kısa ve pratik bir alternatiftir.
- Yapı, koşul → doğru sonuç → yanlış sonuç sırasıyla çalışır.
- Zincirleme kullanılarak çoklu koşullar tek satırda ele alınabilir.
- Değeri olmayan veya geçersiz durumlarda varsayılan ifade çalışır.

15. Fonksiyon Nedir? Neden Kullanırız?

- Fonksiyonlar, JavaScript’te _belirli bir görevi yerine getirmek_ için yazılan, tekrar kullanılabilir kod bloklarıdır. Bir işlemi bir kez tanımlar, ardından ihtiyacımız olduğunda sadece fonksiyonun adını çağırarak aynı işlemi tekrar çalıştırabiliriz.

Fonksiyonları kullanmamızın temel nedenleri:

- _Tekrarı önlemek:_ Aynı kodu defalarca yazmak yerine bir fonksiyon oluşturarak tekrar kullanabiliriz.
- _Kodun düzenli olması:_ Büyük projelerde kodun parçalar hâlinde yönetilebilir olmasını sağlar.
- _Anlaşılabilirlik:_ Fonksiyon isimleri, kodun ne yaptığını açıklar ve okunabilirliği artırır.
- _Bakım kolaylığı:_ Bir davranışı değiştirmek istediğimizde sadece fonksiyonun içini düzenlememiz yeterlidir.
- _Parametrelerle esneklik:_ Fonksiyonlar farklı değerler alarak farklı sonuçlar üretebilir.

Kısacası fonksiyonlar, yazılım geliştirmede _temiz, düzenli ve etkin_ bir kod yapısı oluşturmanın temel yapı taşlarından biridir.

16. **Fonksiyona Parametre (Params) ve Geridönüş (Return) Eklemek:**

- JavaScript fonksiyonları, _dışarıdan değer alabilir (parametreler)_ ve _işlem sonucunu geri döndürebilir (return)_. Bu sayede fonksiyonlar daha esnek ve tekrar kullanılabilir hâle gelir.

- _Parametre (Parameter):_ Fonksiyonun içine dışarıdan gönderilen değerlerdir. Fonksiyon, bu değerleri kullanarak işlem yapabilir.  
  Örnek: `function topla(a, b)` → `a` ve `b` parametrelerdir.

- _Return (Geri Dönüş):_ Fonksiyonun işleminin sonucunu dışarıya iletmek için kullanılır. Return ifadesi kullanıldığında fonksiyon bir değer üretir ve bu değer değişkenlere atanabilir veya başka işlemlerde kullanılabilir.  
  Örnek: `return a + b;` → Toplam değeri dışarıya döndürür.

_Avantajları:_

- Fonksiyonun tek bir değer üretmesini ve bunu başka yerlerde kullanabilmesini sağlar.

- Kodun tekrarını azaltır ve fonksiyonları daha esnek hâle getirir.
- Parametre ve return kombinasyonu, fonksiyonları modüler ve bağımsız yapar.

Kısaca, _parametreler fonksiyonun girdi değerlerini**, **return ise çıktısını_ kontrol eder ve fonksiyonları güçlü bir araç hâline getirir.

17. **Fat Arrow () => Fonksiyonu Kullanımı :**

- Fat Arrow fonksiyonları, JavaScript’te ES6 ile gelen ve fonksiyon yazımını daha kısa, modern ve okunabilir hâle getiren bir sözdizimidir. Geleneksel `function` yapısına göre daha az kodla fonksiyon tanımlamamıza imkân tanır. Ayrıca, `this` bağlamını dışarıdan miras aldığı için özellikle callback yapılarında daha tutarlı davranır. Tek satırlık işlemlerde süslü parantez ve `return` anahtar sözcüğüne gerek kalmadan doğrudan sonuç döndürülebilir. Kısacası Fat Arrow fonksiyonları, daha temiz, daha hızlı yazılabilen ve modern JavaScript projelerinde sıkça tercih edilen fonksiyon tanımlama yöntemidir.

18. **If/Else, Switch Case ve Fonksiyon Kullanım Farkları:**

- _If/Else:_
  Küçük ve bağımsız koşulları kontrol etmek için kullanılır. Koşul true veya false olduğunda çalışacak kod bloklarını belirler. Basit ve kısa karar yapıları için idealdir.

- _Switch Case:_
  Bir değişkenin alabileceği _birden fazla sabit değeri_ kontrol etmek için kullanılır. Çok sayıda koşulun olduğu durumlarda if/else zincirine göre daha okunabilir ve yönetilebilir bir yapı sunar. `default` ile eşleşmeyen durumlar da kolayca yönetilebilir.

- _Fonksiyon:_  
  Tekrar eden işlemleri, hesaplamaları veya belirli görevleri bağımsız bir blok hâline getirmek için kullanılır. Parametre alabilir ve değer döndürebilir. Fonksiyonlar kodun tekrarını azaltır, modülerliği artırır ve büyük projelerde bakım kolaylığı sağlar.

---

Kısacası, if/else ve switch case _koşul kontrolü için_, fonksiyonlar ise bu koşulların veya işlemlerin _tekrar kullanılabilir ve modüler şekilde uygulanması_ için tercih edilir.

19. **Etkinlik (Event) Ekleme ve Özelliklerine Ulaşma**

- JavaScript’te event (etkinlik), kullanıcı veya tarayıcı tarafından tetiklenen işlemlerdir. Örneğin: tıklama, yazı yazma, fare hareketi, sayfanın yüklenmesi gibi.

- Bir event gerçekleştiğinde çalışmasını istediğimiz kodu event listener ekleyerek belirleriz. Böylece sayfa, kullanıcı etkileşimine göre dinamik olarak tepki verebilir.

- Her event, gerçekleştiği anda bir event nesnesi oluşturur. Bu nesne; olayın hangi öğede gerçekleştiğini, kullanıcının ne yaptığını ve varsayılan davranışların kontrolünü içerir.

- Kısacası event kullanımı, web sayfasını etkileşimli, dinamik ve kullanıcıya duyarlı hâle getirmenin temel yoludur.

20. **Event Listener ile Çalışmak**

- Event Listener, bir öğede gerçekleşen belirli bir olayı “dinleyip” o olay gerçekleştiğinde çalışacak bir fonksiyonu tetikler. Bu yapı sayesinde sayfadaki etkileşimleri kontrol edebilir ve kullanıcı davranışlarına göre dinamik aksiyonlar oluşturabiliriz.

- Event listener kullanmanın avantajları:

  - Bir öğeye birden fazla etkinlik ekleyebilmemizi sağlar.

  - HTML içine karışmadan, JavaScript tarafında temiz bir şekilde yönetilir.

  - Olay gerçekleştiği anda devreye girerek kontrolü bize verir.

  - Eklenen olaylar gerektiğinde kaldırılabilir, böylece esnek bir yapı sunar.

- Kısacası event listener, web sayfasındaki davranışları modüler, düzenli ve yönetilebilir hâle getirmek için kullanılan en modern yöntemdir.s
