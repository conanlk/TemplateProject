import React from 'react'
import { Select, Tag } from 'antd'
import styles from './style.module.scss'

const CryptoList = () => {
  return (
    <div>
      <div className="d-block d-sm-none">
        <Select showSearch size="large" defaultValue="btc" style={{ width: '100%' }}>
          <Select.Option value="btc">
            BTC (Bitcoin)
            <Tag color="blue" className="ml-3">
              11.7%
            </Tag>
          </Select.Option>
          <Select.Option value="xmr">
            XMR (Monero)
            <Tag color="blue" className="ml-3">
              67.5%
            </Tag>
          </Select.Option>
          <Select.Option value="gld">
            GLD (GoldCoin)
            <Tag color="red" className="ml-3">
              -22.9%
            </Tag>
          </Select.Option>
          <Select.Option value="neo">
            NEO (Neo)
            <Tag color="red" className="ml-3">
              -12.3%
            </Tag>
          </Select.Option>
          <Select.Option value="btg">
            BTG (Bitcoin Gold)
            <Tag color="blue" className="ml-3">
              +4.3%
            </Tag>
          </Select.Option>
          <Select.Option value="xrp">
            XRP (Ripple)
            <Tag color="red" className="ml-3">
              -4.2%
            </Tag>
          </Select.Option>
          <Select.Option value="zec">
            ZEC (ZCash)
            <Tag color="red" className="ml-3">
              -1.7%
            </Tag>
          </Select.Option>
          <Select.Option value="neo">
            ZCL (ZClassic)
            <Tag color="red" className="ml-3">
              -2.8%
            </Tag>
          </Select.Option>
        </Select>
      </div>
      <div className="d-none d-sm-block">
        <a href="#" className={styles.listItem}>
          <span className={styles.listPercents}>
            <span>11.7%</span>
            0.00016985
          </span>
          <span className={styles.listCurrency}>
            <span>BTC</span>
            97.20
          </span>
        </a>
        <a href="#" className={`${styles.listItem} ${styles.listItemNegative}`}>
          <span className={styles.listPercents}>
            <span>67.5%</span>
            0.00016985
          </span>
          <span className={styles.listCurrency}>
            <span>XMR</span>
            8.26
          </span>
        </a>
        <a href="#" className={`${styles.listItem} ${styles.listItemNegative}`}>
          <span className={styles.listPercents}>
            <span>-22.9%</span>
            0.00016985
          </span>
          <span className={styles.listCurrency}>
            <span>GLD</span>
            5.20
          </span>
        </a>
        <a href="#" className={styles.listItem}>
          <span className={styles.listPercents}>
            <span>-12.3%</span>
            0.00016985
          </span>
          <span className={styles.listCurrency}>
            <span>NEO</span>
            3.20
          </span>
        </a>
        <a href="#" className={styles.listItem}>
          <span className={styles.listPercents}>
            <span>+4.3%</span>
            0.00036234
          </span>
          <span className={styles.listCurrency}>
            <span>BTG</span>
            5.64
          </span>
        </a>
        <a href="#" className={`${styles.listItem} ${styles.listItemNegative}`}>
          <span className={styles.listPercents}>
            <span>-4.2%</span>
            0.00035685
          </span>
          <span className={styles.listCurrency}>
            <span>XRP</span>
            6.36
          </span>
        </a>
        <a href="#" className={styles.listItem}>
          <span className={styles.listPercents}>
            <span>-1.7%</span>
            0.00000985
          </span>
          <span className={styles.listCurrency}>
            <span>ZEC</span>
            6.35
          </span>
        </a>
        <a href="#" className={styles.listItem}>
          <span className={styles.listPercents}>
            <span>-2.8%</span>
            0.00000152
          </span>
          <span className={styles.listCurrency}>
            <span>ZCL</span>
            1.03
          </span>
        </a>
      </div>
    </div>
  )
}

export default CryptoList
