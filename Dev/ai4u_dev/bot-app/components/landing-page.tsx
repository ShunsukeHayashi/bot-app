'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, Zap, Image, Users } from 'lucide-react'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-sans">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Midjourney アシスタントボット
        </h1>
        <p className="text-2xl text-gray-700 mb-8">想像力を現実に変える、あなたのAIパートナー</p>
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
          今すぐ体験する <ArrowRight className="ml-2" />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">驚きの機能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "AIプロンプト", description: "インテリジェントな提案で創造力を刺激", icon: <Sparkles className="h-8 w-8 text-yellow-500" /> },
              { title: "ワンクリック生成", description: "思いついたらすぐに画像化", icon: <Zap className="h-8 w-8 text-blue-500" /> },
              { title: "スタイルカスタマイズ", description: "あなた好みの画風に調整", icon: <Image className="h-8 w-8 text-green-500" /> },
              { title: "コラボレーション", description: "みんなで一緒に創作", icon: <Users className="h-8 w-8 text-purple-500" /> },
            ].map((feature, index) => (
              <Card key={index} className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center text-2xl font-bold">
                    <div className="animate-bounce">{feature.icon}</div>
                    <span className="ml-3">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <Card className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-4">今すぐ試してみよう</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-600 mb-6">
                    AIの力で驚くべき画像を生成しましょう。下のチャットボットを使って、あなたのクリエイティビティを解き放ちましょう！
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                    チャットを開始 <ArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-8">
                <img src="/placeholder.svg?height=300&width=300" alt="AI生成画像のサンプル" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">なぜ選ばれるのか</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">簡単操作で驚きの結果</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AIが的確なプロンプトを提案し、ワンクリックで画像を生成。
                  複雑な操作は必要ありません。思いついたアイデアを即座に視覚化できます。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">無限の可能性</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  デジタルアートからマーケティング素材まで、用途は無限大。
                  あなたの想像力が及ぶ限り、どんな画像でも生成できます。
                  創造の限界を押し広げましょう。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-24">
          <Card className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-800 mb-4">Midjourneyアシスタントボットを体験</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-gray-600 mb-6">
                以下のチャットボットで、Midjourneyアシスタントボットの力を直接体験してください。
                あなたのアイデアを伝えるだけで、AIが驚くべき画像を生成します。
              </p>
              <div className="w-full h-[700px] rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src="https://udify.app/chatbot/9qP8PAWo0qFbRXO5"
                  style={{width: '100%', height: '100%', minHeight: '700px'}}
                  frameBorder="0"
                  allow="microphone"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl p-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-800 mb-4">さあ、始めましょう</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-gray-600 mb-6">
                Midjourney アシスタントボットで、あなたのクリエイティブな旅を始めましょう。
                上のチャットボットを使って、AIの力であなたの想像力を現実にしましょう。
              </p>
              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                  無料で始める <ArrowRight className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; 2023 Midjourney アシスタントボット. All rights reserved.</p>
      </footer>
    </div>
  )
}