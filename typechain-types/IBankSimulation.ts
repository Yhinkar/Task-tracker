/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface IBankSimulationInterface extends utils.Interface {
  functions: {
    "Deposit()": FunctionFragment;
    "retrieveFunds()": FunctionFragment;
    "withDrawFunds(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "Deposit" | "retrieveFunds" | "withDrawFunds"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "Deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "retrieveFunds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withDrawFunds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "Deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "retrieveFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withDrawFunds",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBankSimulation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBankSimulationInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    Deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    retrieveFunds(overrides?: CallOverrides): Promise<[BigNumber]>;

    withDrawFunds(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  Deposit(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  retrieveFunds(overrides?: CallOverrides): Promise<BigNumber>;

  withDrawFunds(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    Deposit(overrides?: CallOverrides): Promise<void>;

    retrieveFunds(overrides?: CallOverrides): Promise<BigNumber>;

    withDrawFunds(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    Deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    retrieveFunds(overrides?: CallOverrides): Promise<BigNumber>;

    withDrawFunds(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    Deposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    retrieveFunds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withDrawFunds(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
