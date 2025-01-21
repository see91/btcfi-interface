import "./styles/PageHome.scss";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const PageHome = (props: any) => {
  const { t }: any = useTranslation();
  return (
    <div className="css-page page_home">
      <div className="level-1 bg-tg"></div>
      <div className="page-all level-2">
        <div className="level-3 com-header">
          <div className="logos">
            <div className="logo"></div>
            <div className="website size-32 family-proto">PRISTINE.MONEY</div>
          </div>
          <div className="menus">
            <div className="menu-item size-24 family-proto">DOCS</div>
            <div className="menu-item size-24 family-proto">COMMUNITY</div>
            <div className="menu-item">
              <button className="css-btn size-24 family-proto">
                LAUNCH APP
              </button>
            </div>
          </div>
        </div>
        <div className="level-3 com-banner">
          <div className="tips size-36 family-proto">
            GROW BITCOIN, EARN DOLLARS
          </div>
          <div className="title">
            <span className="size-120 family-rubik">BITCOIN</span>
            <span className="size-80 family-rubik orange">X</span>
            <span className="size-120 family-rubik">DOLLARS</span>
          </div>
          <div className="btns">
            <div className="css-btn-click">
              <span className="text family-proto-bold">PBTC</span>
              <i className="i-arrow"></i>
            </div>
            <div className="css-btn-click orange">
              <span className="text family-proto-bold">PUSD</span>
              <i className="i-arrow"></i>
            </div>
          </div>
          <div className="notice family-proto">
            Internet Native Money Backed by Bitcoin
          </div>
          <div className="click-next"></div>
        </div>
        <div className="level-3 com-together">
          <div className="title family-proto">
            Bitcoin x Dollars-Better together
          </div>
          <div className="context">
            <div className="context-item">
              <div className="ctx-1">
                <div className="logo">
                  <i className="i-logo"></i>
                </div>
                <div className="text family-proto-bold">
                  Unlock your Bitcoin's full potential
                </div>
              </div>
              <div className="ctx-2 family-proto">
                Turn your Bitcoin into a yield-generating asset with a liquid
                staking token (LST)
              </div>
              <div className="ctx-3 css-btn-click orange-white">
                <span>pBTC</span>
                <i className="i-arrow"></i>
              </div>
            </div>
            <div className="context-item">
              <div className="ctx-1">
                <div className="logo">
                  <i className="i-logo right"></i>
                </div>
                <div className="text family-proto-bold">
                  Never sell your Bitcoin
                </div>
              </div>
              <div className="ctx-2 family-proto">
                Borrow dollar stablecoins and keep the upside from Bitcoin’s
                price increase
              </div>
              <div className="ctx-3 css-btn-click orange-white">
                <span>pUSD</span>
                <i className="i-arrow"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="level-3 com-pusd">
          <div className="title family-proto">
            Stake Bitcoin to get BTC yields and Borrow stablecoin pUSD
          </div>
          <div className="times">
            <div className="time-item time-1">
              <p className="t-title family-proto">STAKE BITCOIN</p>
              <p className="t-notice family-proto">
                Deposit supported assets like: WBTC, cbBTC, solvBTC, &amp; more
              </p>
            </div>
            <div className="time-item time-2">
              <p className="t-title family-proto">EARN BITCOIN</p>
              <p className="t-notice family-proto">
                Receive LST pBTC to earn from staking yields
              </p>
            </div>
            <div className="time-item time-3">
              <p className="t-title family-proto">BORROW DOLLARS</p>
              <p className="t-notice family-proto">Borrow stablecoin pUSD to use across Defi Z</p>
            </div>
            <div className="time-4">
              <div className="time-item time-5">
                <p className="t-title family-proto">Leverage</p>
                <p className="t-notice family-proto">Increase your exposure to BTC, up to 11x</p>
              </div>
              <div className="time-item time-6">
                <p className="t-title family-proto">EARN</p>
                <p className="t-notice family-proto">
                  Stake pUSD and earn yields from protocol revenue, liquidation
                  proceeds, and other sources.
                </p>
              </div>
              <div className="time-item time-7">
                <p className="t-title family-proto">PAY</p>
                <p className="t-notice family-proto">
                  Use pUSD as everyday money and buy yourself a nice little
                  something
                </p>
              </div>
            </div>
            <div className="pos level-4 pos-t1">
              <i className="i-coin"></i>
            </div>
            <div className="pos level-4 pos-t2"></div>
            <div className="pos level-4 pos-t3"></div>
            <div className="pos level-4 pos-t4">
              <i className="i-coin"></i>
            </div>
            <div className="pos level-4 pos-t5"></div>
            <div className="pos level-4 pos-t6"></div>
            <div className="pos level-4 pos-t7">
              <i className="i-coin"></i>
            </div>
            <div className="pos level-4 pos-t8"></div>
            <div className="pos level-4 pos-t9"></div>
            <div className="pos level-4 pos-t10"></div>
            <div className="pos level-4 pos-t11"></div>
            <div className="pos level-4 pos-t12"></div>
            <div className="pos level-4 pos-t13"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(PageHome);
