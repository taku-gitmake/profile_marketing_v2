import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MessageCircle,
  TrendingUp,
  Users,
  Target,
  Mail,
  ExternalLink,
  CheckCircle,
  Star,
  Award,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-800">鈴木 拓哉</h1>
              <p className="text-sm text-slate-600">マーケティング＆心理コーチ</p>
            </div>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="#contact">
                <MessageCircle className="w-4 h-4 mr-2" />
                相談する
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src="/images/profile.jpg" alt="鈴木琢矢のプロフィール写真" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              現役で無形商品を販売する
              <br />
              <span className="text-blue-600">実践派マーケッター</span>
            </h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              自社コンサル商品で年商5,000万円を達成しながら
              <br />
              同時に事業者の集客をサポートする二刀流スタイル
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <Award className="w-3 h-3 mr-1" />
                現役コンサル年商5,000万円
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Users className="w-3 h-3 mr-1" />
                プレイヤー兼サポーター
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <Target className="w-3 h-3 mr-1" />
                多業種集客実績
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-slate-800">はじめに</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed font-medium text-lg mb-4">
                ハーゲンダッツとチョコレートを愛する<span className="text-blue-600">甘党マーケッター</span>です。
              </p>
              <p className="text-slate-700 leading-relaxed">
                甘いものを食べながら考える集客戦略が、なぜか結果を出してしまいます。
              </p>
              <p className="text-slate-700 leading-relaxed">
                私は、広告代理店でもなければ、コンサル専門業でもありません。自分自身が"商品オーナー"として500万円以上の広告費を溶かし、失敗を繰り返しながらも試行錯誤の末に年商5,000万円のビジネスを構築してきました。
              </p>
              <p className="text-slate-700 leading-relaxed font-medium text-blue-700">
                その実体験から得た「売れない広告の落とし穴」と「売れる導線設計の本質」を惜しみなくお伝えしています。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Profile */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">プロフィール</h2>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">基本情報</h3>
                  <div className="space-y-2 text-slate-700">
                    <p>
                      <span className="font-medium">名前：</span>鈴木 拓哉（すずき たくや）
                    </p>
                    <p>
                      <span className="font-medium">職業：</span>マーケティング＆心理コーチ /
                      暮らしのサービス業集客コンサルタント
                    </p>
                    <p>
                      <span className="font-medium">活動拠点：</span>東京都目黒区
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">趣味</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">ハーゲンダッツ食べ比べ</Badge>
                    <Badge variant="outline">チョコレート探訪</Badge>
                    <Badge variant="outline">カフェ巡り</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">経歴とストーリー</h2>
          <div className="space-y-6">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    1
                  </div>
                  会社員時代（約10年）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  総合商社・金融業界で法人営業・プロジェクトマネジメントを経験。ロジカル思考、事業収支の管理、社内外の折衝スキルなど、ビジネスの土台を徹底的に叩き込まれました。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    2
                  </div>
                  コーチングの世界へ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  「人間の心の動き」に強い関心を抱き、コーチングの世界に飛び込み。副業として人の悩みを聴き、変化のきっかけを提供する中で、「人の行動が変わる瞬間」の面白さにのめり込んでいきました。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    3
                  </div>
                  独立・恋愛塾立ち上げ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  40〜60代の男女に向けて『人生後半の恋愛・パートナーシップの再構築』をテーマにした恋愛塾を立ち上げ。最初はゼロからのスタートで、広告費500万円を溶かす失敗も経験しました。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                    4
                  </div>
                  多業種での集客実践
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-3">
                  恋愛塾で年商5,000万円を達成した後、さらに暮らしのサービス業（便利屋、蜂駆除、パソコン修理等）でも事業を立ち上げ。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  緊急性が高く競合の多い市場で、比較サイトや価格競争に巻き込まれない「事業者ファースト」の集客手法を確立。多くの事業者が苦しむ中、質の高い顧客獲得を実現しています。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">私の強み</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  ウォンツ商材の教育設計
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  恋愛塾という無形コンテンツ販売で培った、顧客の購買意欲を段階的に高める教育プロセス設計が得意。パネルを使った効果的な教育フローで成約率を大幅に向上させます。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Zap className="w-5 h-5 mr-2 text-red-600" />
                  緊急性の高いサービス業に精通
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  便利屋、蜂駆除、パソコン修理、水道修理、エアコンクリーニング、不用品回収、鍵開け、害虫駆除など、暮らしのお困りごと解決サービスの集客を実践中。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Users className="w-5 h-5 mr-2 text-green-600" />
                  事業者ファーストの集客
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  多くの事業者が「顧客ファースト」で価格競争に巻き込まれる中、事業者の利益を最優先に考えた集客設計。結果的に質の高い顧客獲得と単価向上を実現します。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                  競合過多市場での差別化
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  「綺麗なホームページを作れば集まる」という幻想を捨て、競合が多く単価の低いサービス業でも確実に成果を出す、現実的な集客戦略を提供します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">提供できるサポート内容</h2>
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-blue-600" />
                  広告×導線コンサル（スポット）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    Meta広告 / Google広告の構造設計
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    LP・オファー・LINE誘導設計
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    CTRやCVRではなく、「売上」ベースで設計
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-600" />
                  セールスファネル構築支援（伴走型）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    集客〜販売〜継続までの流れを設計
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    コンテンツ設計・動画台本・教育設計も可
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    完全オンライン対応（Zoom）
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-green-600" />
                  完全成果報酬型プラン（条件付き）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    初期費用ゼロで成果報酬型も検討可
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                    商品内容・成約率・粗利など要審査
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">成果事例・導入実績</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-lg border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  自社恋愛塾（高利益モデル確立）
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="font-bold text-2xl text-green-600">5,300万円</div>
                      <div className="text-sm text-slate-600">年商</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="font-bold text-xl text-blue-600">100万円+</div>
                      <div className="text-sm text-slate-600">高単価コンサル</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        <strong>Utage活用:</strong> 完全自動化スキーム構築
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        <strong>サブスク収益:</strong> 月額安定収入モデル
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        <strong>高利益率:</strong> 粗利80%超の収益構造
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        <strong>継続率:</strong> 90%以上の顧客満足度
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                    <p className="text-xs text-slate-600 text-center">
                      教育→販売→継続の完全自動化により
                      <br />
                      労働集約型から脱却した高収益モデル
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-purple-600">広告・LP改善実績</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-slate-700">Meta広告：</span>
                    <span className="font-semibold">1リストあたり平均370円</span>
                  </div>
                  <div>
                    <span className="text-slate-700">LP改善：</span>
                    <span className="font-semibold">CV率 1.8％→6.2％</span>
                  </div>
                  <div>
                    <span className="text-slate-700">セールス動画：</span>
                    <span className="font-semibold">成約率 18％→41％</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">こんなお困りごとはありませんか？</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg">💸 広告費をかけても売上に繋がらない</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg">📉 集客はできるが成約率が低い</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg">🔄 価格競争に巻き込まれて利益が出ない</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg">⏰ 集客に時間を取られて本業に集中できない</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg">🤔 何から始めればいいかわからない</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg">📱 オンライン集客の仕組みを作りたい</p>
            </div>
          </div>
          <p className="text-xl mb-8 opacity-90">
            一つでも当てはまる方は
            <br />
            お気軽にLINEでご相談ください
          </p>
          <div className="space-y-4">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="https://line.me/ti/p/Ik7W-cW-br" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                LINEで相談する
              </Link>
            </Button>
            <p className="text-sm opacity-80">まずはお気軽にお声がけください</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8 text-slate-800">よくある質問</h2>
          <div className="space-y-4">
            {[
              {
                q: "広告運用っていくらからできますか？",
                a: "月10万円〜が目安。規模や商品内容によって柔軟に対応可能です。",
              },
              {
                q: "初めてのオンライン販売でも大丈夫ですか？",
                a: "むしろ初心者の方にこそ「売れる型」での設計を推奨しています。",
              },
              {
                q: "他の業者と何が違うんですか？",
                a: "私は「売れる仕組み」を作り出すために、集客から販売まで全ての責任を負っています。その違いです。",
              },
              {
                q: "相性が合うかどうか不安です。",
                a: "30分無料相談を行っていますので、お気軽にお試しください。",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">最後に</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            私は"売れる広告のプロ"ではなく、
            <br />
            <span className="font-bold text-blue-600">"広告を切り口に売れる集客の仕組みをつくるプロ"</span>です。
            <br />
            だからこそ、上辺だけの綺麗事ではなく、リアルな導線を一緒に考えられると思っています。
          </p>
          <p className="text-lg text-slate-700 mb-8">ご縁があれば、ぜひ一度お話ししましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <Link href="https://line.me/ti/p/Ik7W-cW-br" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                LINEで相談する
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 bg-transparent">
              <Mail className="w-5 h-5 mr-2" />
              メールで問い合わせ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">鈴木 拓哉</h3>
            <p className="text-slate-300 mb-4">マーケティング＆心理コーチ</p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="mailto:example@example.com" className="hover:text-blue-400 flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                example@example.com
              </Link>
              <Link href="https://example.com" className="hover:text-blue-400 flex items-center">
                <ExternalLink className="w-4 h-4 mr-1" />
                ホームページ
              </Link>
            </div>
            <Separator className="my-6 bg-slate-600" />
            <p className="text-slate-400 text-sm">© 2024 鈴木拓哉. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
