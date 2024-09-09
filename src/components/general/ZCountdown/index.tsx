// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import Countdown, {
  CountdownTimeDelta,
  type CountdownRendererFn,
} from "react-countdown";

// #endregion

// #region ---- Custom Imports ----
import { ZCard, ZFlex, ZText } from "@src/components/radixUI";
import { getRemainingTimeInMilliseconds } from "@utils/helpers/generic";

// #endregion

// #region ---- Types Imports ----
import { ZRUAlignE, ZRUColorE, ZRUDirectionE, ZRUTextSizeT } from "@src/types";

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

const ZCountdown: React.FC<{
  date?: string | number;
  size?: ZRUTextSizeT;
  onComplete?:
    | ((timeDelta: CountdownTimeDelta, completedOnStart: boolean) => void)
    | (() => void);
}> = ({ date, size, onComplete }) => {
  const renderer: CountdownRendererFn = ({
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    return (
      <ZFlex align={ZRUAlignE.stretch} className="gap-2 w-max">
        <ZFlex align={ZRUAlignE.center} direction={ZRUDirectionE.column}>
          <ZCard className="py-[.1rem] w-16 text-center">
            <ZText color={ZRUColorE.orange} className="" size={size}>
              {hours}
            </ZText>
          </ZCard>
          <ZText size="2">Hours</ZText>
        </ZFlex>

        <ZFlex align={ZRUAlignE.center} direction={ZRUDirectionE.column}>
          <ZCard className="py-[.1rem] w-16 text-center">
            <ZText color={ZRUColorE.orange} className="w-max" size={size}>
              {minutes}
            </ZText>
          </ZCard>
          <ZText size="2">Minutes</ZText>
        </ZFlex>

        <ZFlex align={ZRUAlignE.center} direction={ZRUDirectionE.column}>
          <ZCard className="py-[.1rem] w-16 text-center">
            <ZText color={ZRUColorE.orange} className="w-max" size={size}>
              {seconds}
            </ZText>
          </ZCard>
          <ZText size="2">Seconds</ZText>
        </ZFlex>
      </ZFlex>
    );
  };

  return (
    <Countdown
      date={Date.now() + getRemainingTimeInMilliseconds(date)}
      renderer={renderer}
      onComplete={onComplete}
    />
  );
};

export default React.memo(ZCountdown);
