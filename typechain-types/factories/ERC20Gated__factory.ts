/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Gated, ERC20GatedInterface } from "../ERC20Gated";

const _abi = [
  {
    inputs: [],
    name: "NotAllowed",
    type: "error",
  },
  {
    inputs: [],
    name: "NotPurchase",
    type: "error",
  },
  {
    inputs: [],
    name: "NotSuccessful",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongSlicer",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "productsModuleAddress_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "slicerId_",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "erc20_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gateAmount_",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "isPurchaseAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "isAllowed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slicerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "slicerCustomData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "buyerCustomData",
        type: "bytes",
      },
    ],
    name: "onProductPurchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105c4806100206000396000f3fe6080604052600436106100345760003560e01c806395db936814610039578063a23fffb91461006d578063e24df75414610082575b600080fd5b34801561004557600080fd5b5061005961005436600461044d565b6100a2565b604051901515815260200160405180910390f35b61008061007b36600461044d565b610125565b005b34801561008e57600080fd5b5061008061009d3660046104df565b610163565b6002546040516370a0823160e01b81526001600160a01b03868116600483015260009283929116906370a0823190602401602060405180830381865afa1580156100f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101149190610527565b600354111598975050505050505050565b8561012f81610215565b61013d8787878787876100a2565b61015a57604051631eb49d6d60e11b815260040160405180910390fd5b50505050505050565b600061016f600161026b565b90508015610187576000805461ff0019166101001790555b61019185856102fc565b604080518082019091526001600160a01b0384168082526020909101839052600280546001600160a01b03191690911790556003829055801561020e576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b806001541461023757604051632eafdb6960e01b815260040160405180910390fd5b6000546201000090046001600160a01b03163314610268576040516347322d0360e01b815260040160405180910390fd5b50565b60008054610100900460ff16156102bb578160ff16600114801561028e5750303b155b6102b35760405162461bcd60e51b81526004016102aa90610540565b60405180910390fd5b506000919050565b60005460ff8084169116106102e25760405162461bcd60e51b81526004016102aa90610540565b506000805460ff191660ff92909216919091179055600190565b600054610100900460ff166103675760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016102aa565b600080546001600160a01b03909316620100000262010000600160b01b031990931692909217909155600155565b6001600160a01b038116811461026857600080fd5b634e487b7160e01b600052604160045260246000fd5b600082601f8301126103d157600080fd5b813567ffffffffffffffff808211156103ec576103ec6103aa565b604051601f8301601f19908116603f01168101908282118183101715610414576104146103aa565b8160405283815286602085880101111561042d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060008060c0878903121561046657600080fd5b8635955060208701359450604087013561047f81610395565b935060608701359250608087013567ffffffffffffffff808211156104a357600080fd5b6104af8a838b016103c0565b935060a08901359150808211156104c557600080fd5b506104d289828a016103c0565b9150509295509295509295565b600080600080608085870312156104f557600080fd5b843561050081610395565b935060208501359250604085013561051781610395565b9396929550929360600135925050565b60006020828403121561053957600080fd5b5051919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fea26469706673582212206b85289ce1a220d5c619a8efdc896862ecf7f9c3c0f0e1622132aead0dff0fe364736f6c634300080d0033";

type ERC20GatedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20GatedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Gated__factory extends ContractFactory {
  constructor(...args: ERC20GatedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Gated";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Gated> {
    return super.deploy(overrides || {}) as Promise<ERC20Gated>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Gated {
    return super.attach(address) as ERC20Gated;
  }
  connect(signer: Signer): ERC20Gated__factory {
    return super.connect(signer) as ERC20Gated__factory;
  }
  static readonly contractName: "ERC20Gated";
  public readonly contractName: "ERC20Gated";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20GatedInterface {
    return new utils.Interface(_abi) as ERC20GatedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Gated {
    return new Contract(address, _abi, signerOrProvider) as ERC20Gated;
  }
}