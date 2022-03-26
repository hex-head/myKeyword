import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Character.module.css'

export default function Character() {
  let canvas
  let image: HTMLImageElement
  let ctx: CanvasRenderingContext2D
  const [face, setFace] = useState<number>(0)

  const changeFace = (isReverse = false) => {
    canvas = document.getElementById('monster') as HTMLCanvasElement
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    image = new window.Image(30, 30)
    let faceIdx

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    faceIdx = isReverse ? Math.abs((face + 3) % 4) : (face + 1) % 4

    image.src = `/face${faceIdx}.png`
    image.onload = function () {
      ctx.drawImage(image, 0, 0)
    }
    setFace(faceIdx)
  }

  useEffect(() => {
    changeFace()
  }, [])

  return (
    <div className={styles.grid}>
      <Image
        src="/arrow-left.png"
        alt="왼쪽 버튼"
        width={50}
        height={50}
        onClick={() => changeFace(true)}
        className={styles.arrowBtn}
      />
      <div className={styles.character}>
        <canvas id="monster" width="150" height="300"></canvas>
      </div>
      <Image
        src="/arrow-right.png"
        alt="오른쪽 버튼"
        width={50}
        height={50}
        onClick={() => changeFace()}
        className={styles.arrowBtn}
      />
    </div>
  )
}
