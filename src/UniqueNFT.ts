import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UniqueNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const uniqueNftAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'TokenChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'addCollectionAdminCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'user',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'addToCollectionAllowListCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'user',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'allowlistedCross',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'approved', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'approved',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approveCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'owner',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'balanceOfCross',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'from',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnFromCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newOwner',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'changeCollectionOwnerCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'collectionAdmins',
    outputs: [
      {
        name: '',
        internalType: 'struct CrossAddress[]',
        type: 'tuple[]',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'collectionHelperAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'collectionLimits',
    outputs: [
      {
        name: '',
        internalType: 'struct CollectionLimit[]',
        type: 'tuple[]',
        components: [
          {
            name: 'field',
            internalType: 'enum CollectionLimitField',
            type: 'uint8',
          },
          {
            name: 'value',
            internalType: 'struct OptionUint256',
            type: 'tuple',
            components: [
              { name: 'status', internalType: 'bool', type: 'bool' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'collectionNesting',
    outputs: [
      {
        name: '',
        internalType: 'struct CollectionNestingAndPermission',
        type: 'tuple',
        components: [
          { name: 'token_owner', internalType: 'bool', type: 'bool' },
          { name: 'collection_admin', internalType: 'bool', type: 'bool' },
          { name: 'restricted', internalType: 'address[]', type: 'address[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'collectionOwner',
    outputs: [
      {
        name: '',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    name: 'collectionProperties',
    outputs: [
      {
        name: '',
        internalType: 'struct Property[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'key', internalType: 'string', type: 'string' }],
    name: 'collectionProperty',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'collectionSponsor',
    outputs: [
      {
        name: '',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'confirmCollectionSponsorship',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'contractAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'keys', internalType: 'string[]', type: 'string[]' }],
    name: 'deleteCollectionProperties',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'keys', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'deleteProperties',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'description',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hasCollectionPendingSponsor',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'user',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'isOwnerOrAdminCross',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'mint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'data',
        internalType: 'struct MintTokenData[]',
        type: 'tuple[]',
        components: [
          {
            name: 'owner',
            internalType: 'struct CrossAddress',
            type: 'tuple',
            components: [
              { name: 'eth', internalType: 'address', type: 'address' },
              { name: 'sub', internalType: 'uint256', type: 'uint256' },
            ],
          },
          {
            name: 'properties',
            internalType: 'struct Property[]',
            type: 'tuple[]',
            components: [
              { name: 'key', internalType: 'string', type: 'string' },
              { name: 'value', internalType: 'bytes', type: 'bytes' },
            ],
          },
        ],
      },
    ],
    name: 'mintBulkCross',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'to',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'properties',
        internalType: 'struct Property[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'mintCross',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenUri', internalType: 'string', type: 'string' },
    ],
    name: 'mintWithTokenURI',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextTokenId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOfCross',
    outputs: [
      {
        name: '',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'keys', internalType: 'string[]', type: 'string[]' },
    ],
    name: 'properties',
    outputs: [
      {
        name: '',
        internalType: 'struct Property[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'key', internalType: 'string', type: 'string' },
    ],
    name: 'property',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'admin',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'removeCollectionAdminCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'removeCollectionSponsor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'user',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'removeFromCollectionAllowListCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'mode', internalType: 'enum AccessMode', type: 'uint8' }],
    name: 'setCollectionAccess',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'limit',
        internalType: 'struct CollectionLimit',
        type: 'tuple',
        components: [
          {
            name: 'field',
            internalType: 'enum CollectionLimitField',
            type: 'uint8',
          },
          {
            name: 'value',
            internalType: 'struct OptionUint256',
            type: 'tuple',
            components: [
              { name: 'status', internalType: 'bool', type: 'bool' },
              { name: 'value', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'setCollectionLimit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'mode', internalType: 'bool', type: 'bool' }],
    name: 'setCollectionMintMode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'collectionNestingAndPermissions',
        internalType: 'struct CollectionNestingAndPermission',
        type: 'tuple',
        components: [
          { name: 'token_owner', internalType: 'bool', type: 'bool' },
          { name: 'collection_admin', internalType: 'bool', type: 'bool' },
          { name: 'restricted', internalType: 'address[]', type: 'address[]' },
        ],
      },
    ],
    name: 'setCollectionNesting',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'properties',
        internalType: 'struct Property[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setCollectionProperties',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'sponsor',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'setCollectionSponsorCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'properties',
        internalType: 'struct Property[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          { name: 'value', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setProperties',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'permissions',
        internalType: 'struct TokenPropertyPermission[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          {
            name: 'permissions',
            internalType: 'struct PropertyPermission[]',
            type: 'tuple[]',
            components: [
              {
                name: 'code',
                internalType: 'enum TokenPermissionField',
                type: 'uint8',
              },
              { name: 'value', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
    name: 'setTokenPropertyPermissions',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenPropertyPermissions',
    outputs: [
      {
        name: '',
        internalType: 'struct TokenPropertyPermission[]',
        type: 'tuple[]',
        components: [
          { name: 'key', internalType: 'string', type: 'string' },
          {
            name: 'permissions',
            internalType: 'struct PropertyPermission[]',
            type: 'tuple[]',
            components: [
              {
                name: 'code',
                internalType: 'enum TokenPermissionField',
                type: 'uint8',
              },
              { name: 'value', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'to',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'from',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'to',
        internalType: 'struct CrossAddress',
        type: 'tuple',
        components: [
          { name: 'eth', internalType: 'address', type: 'address' },
          { name: 'sub', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFromCross',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'uniqueCollectionType',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__
 */
export const useReadUniqueNft = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"allowlistedCross"`
 */
export const useReadUniqueNftAllowlistedCross =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'allowlistedCross',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadUniqueNftBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"balanceOfCross"`
 */
export const useReadUniqueNftBalanceOfCross =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'balanceOfCross',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"collectionAdmins"`
 */
export const useReadUniqueNftCollectionAdmins =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'collectionAdmins',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"collectionHelperAddress"`
 */
export const useReadUniqueNftCollectionHelperAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'collectionHelperAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"collectionLimits"`
 */
export const useReadUniqueNftCollectionLimits =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'collectionLimits',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"collectionNesting"`
 */
export const useReadUniqueNftCollectionNesting =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'collectionNesting',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"collectionOwner"`
 */
export const useReadUniqueNftCollectionOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'collectionOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"collectionProperties"`
 */
export const useReadUniqueNftCollectionProperties =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'collectionProperties',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"collectionProperty"`
 */
export const useReadUniqueNftCollectionProperty =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'collectionProperty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"collectionSponsor"`
 */
export const useReadUniqueNftCollectionSponsor =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'collectionSponsor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"contractAddress"`
 */
export const useReadUniqueNftContractAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'contractAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"description"`
 */
export const useReadUniqueNftDescription = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'description',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadUniqueNftGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"hasCollectionPendingSponsor"`
 */
export const useReadUniqueNftHasCollectionPendingSponsor =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'hasCollectionPendingSponsor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadUniqueNftIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"isOwnerOrAdminCross"`
 */
export const useReadUniqueNftIsOwnerOrAdminCross =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'isOwnerOrAdminCross',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"name"`
 */
export const useReadUniqueNftName = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"nextTokenId"`
 */
export const useReadUniqueNftNextTokenId = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'nextTokenId',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadUniqueNftOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"ownerOfCross"`
 */
export const useReadUniqueNftOwnerOfCross = /*#__PURE__*/ createUseReadContract(
  { abi: uniqueNftAbi, functionName: 'ownerOfCross' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"properties"`
 */
export const useReadUniqueNftProperties = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'properties',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"property"`
 */
export const useReadUniqueNftProperty = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'property',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadUniqueNftSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadUniqueNftSymbol = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadUniqueNftTokenByIndex = /*#__PURE__*/ createUseReadContract(
  { abi: uniqueNftAbi, functionName: 'tokenByIndex' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 */
export const useReadUniqueNftTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'tokenOfOwnerByIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"tokenPropertyPermissions"`
 */
export const useReadUniqueNftTokenPropertyPermissions =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'tokenPropertyPermissions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadUniqueNftTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadUniqueNftTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: uniqueNftAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"uniqueCollectionType"`
 */
export const useReadUniqueNftUniqueCollectionType =
  /*#__PURE__*/ createUseReadContract({
    abi: uniqueNftAbi,
    functionName: 'uniqueCollectionType',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__
 */
export const useWriteUniqueNft = /*#__PURE__*/ createUseWriteContract({
  abi: uniqueNftAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"addCollectionAdminCross"`
 */
export const useWriteUniqueNftAddCollectionAdminCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'addCollectionAdminCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"addToCollectionAllowListCross"`
 */
export const useWriteUniqueNftAddToCollectionAllowListCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'addToCollectionAllowListCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteUniqueNftApprove = /*#__PURE__*/ createUseWriteContract({
  abi: uniqueNftAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"approveCross"`
 */
export const useWriteUniqueNftApproveCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'approveCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteUniqueNftBurn = /*#__PURE__*/ createUseWriteContract({
  abi: uniqueNftAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"burnFromCross"`
 */
export const useWriteUniqueNftBurnFromCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'burnFromCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"changeCollectionOwnerCross"`
 */
export const useWriteUniqueNftChangeCollectionOwnerCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'changeCollectionOwnerCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"confirmCollectionSponsorship"`
 */
export const useWriteUniqueNftConfirmCollectionSponsorship =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'confirmCollectionSponsorship',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"deleteCollectionProperties"`
 */
export const useWriteUniqueNftDeleteCollectionProperties =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'deleteCollectionProperties',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"deleteProperties"`
 */
export const useWriteUniqueNftDeleteProperties =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'deleteProperties',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteUniqueNftMint = /*#__PURE__*/ createUseWriteContract({
  abi: uniqueNftAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"mintBulkCross"`
 */
export const useWriteUniqueNftMintBulkCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'mintBulkCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"mintCross"`
 */
export const useWriteUniqueNftMintCross = /*#__PURE__*/ createUseWriteContract({
  abi: uniqueNftAbi,
  functionName: 'mintCross',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"mintWithTokenURI"`
 */
export const useWriteUniqueNftMintWithTokenUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'mintWithTokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"removeCollectionAdminCross"`
 */
export const useWriteUniqueNftRemoveCollectionAdminCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'removeCollectionAdminCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"removeCollectionSponsor"`
 */
export const useWriteUniqueNftRemoveCollectionSponsor =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'removeCollectionSponsor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"removeFromCollectionAllowListCross"`
 */
export const useWriteUniqueNftRemoveFromCollectionAllowListCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'removeFromCollectionAllowListCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteUniqueNftSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteUniqueNftSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionAccess"`
 */
export const useWriteUniqueNftSetCollectionAccess =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionAccess',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionLimit"`
 */
export const useWriteUniqueNftSetCollectionLimit =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionLimit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionMintMode"`
 */
export const useWriteUniqueNftSetCollectionMintMode =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionMintMode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionNesting"`
 */
export const useWriteUniqueNftSetCollectionNesting =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionNesting',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionProperties"`
 */
export const useWriteUniqueNftSetCollectionProperties =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionProperties',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionSponsorCross"`
 */
export const useWriteUniqueNftSetCollectionSponsorCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionSponsorCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setProperties"`
 */
export const useWriteUniqueNftSetProperties =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'setProperties',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setTokenPropertyPermissions"`
 */
export const useWriteUniqueNftSetTokenPropertyPermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'setTokenPropertyPermissions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteUniqueNftTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: uniqueNftAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"transferCross"`
 */
export const useWriteUniqueNftTransferCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'transferCross',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteUniqueNftTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"transferFromCross"`
 */
export const useWriteUniqueNftTransferFromCross =
  /*#__PURE__*/ createUseWriteContract({
    abi: uniqueNftAbi,
    functionName: 'transferFromCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__
 */
export const useSimulateUniqueNft = /*#__PURE__*/ createUseSimulateContract({
  abi: uniqueNftAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"addCollectionAdminCross"`
 */
export const useSimulateUniqueNftAddCollectionAdminCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'addCollectionAdminCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"addToCollectionAllowListCross"`
 */
export const useSimulateUniqueNftAddToCollectionAllowListCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'addToCollectionAllowListCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateUniqueNftApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"approveCross"`
 */
export const useSimulateUniqueNftApproveCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'approveCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateUniqueNftBurn = /*#__PURE__*/ createUseSimulateContract(
  { abi: uniqueNftAbi, functionName: 'burn' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"burnFromCross"`
 */
export const useSimulateUniqueNftBurnFromCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'burnFromCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"changeCollectionOwnerCross"`
 */
export const useSimulateUniqueNftChangeCollectionOwnerCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'changeCollectionOwnerCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"confirmCollectionSponsorship"`
 */
export const useSimulateUniqueNftConfirmCollectionSponsorship =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'confirmCollectionSponsorship',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"deleteCollectionProperties"`
 */
export const useSimulateUniqueNftDeleteCollectionProperties =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'deleteCollectionProperties',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"deleteProperties"`
 */
export const useSimulateUniqueNftDeleteProperties =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'deleteProperties',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateUniqueNftMint = /*#__PURE__*/ createUseSimulateContract(
  { abi: uniqueNftAbi, functionName: 'mint' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"mintBulkCross"`
 */
export const useSimulateUniqueNftMintBulkCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'mintBulkCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"mintCross"`
 */
export const useSimulateUniqueNftMintCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'mintCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"mintWithTokenURI"`
 */
export const useSimulateUniqueNftMintWithTokenUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'mintWithTokenURI',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"removeCollectionAdminCross"`
 */
export const useSimulateUniqueNftRemoveCollectionAdminCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'removeCollectionAdminCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"removeCollectionSponsor"`
 */
export const useSimulateUniqueNftRemoveCollectionSponsor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'removeCollectionSponsor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"removeFromCollectionAllowListCross"`
 */
export const useSimulateUniqueNftRemoveFromCollectionAllowListCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'removeFromCollectionAllowListCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateUniqueNftSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateUniqueNftSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionAccess"`
 */
export const useSimulateUniqueNftSetCollectionAccess =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionAccess',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionLimit"`
 */
export const useSimulateUniqueNftSetCollectionLimit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionLimit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionMintMode"`
 */
export const useSimulateUniqueNftSetCollectionMintMode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionMintMode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionNesting"`
 */
export const useSimulateUniqueNftSetCollectionNesting =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionNesting',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionProperties"`
 */
export const useSimulateUniqueNftSetCollectionProperties =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionProperties',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setCollectionSponsorCross"`
 */
export const useSimulateUniqueNftSetCollectionSponsorCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'setCollectionSponsorCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setProperties"`
 */
export const useSimulateUniqueNftSetProperties =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'setProperties',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"setTokenPropertyPermissions"`
 */
export const useSimulateUniqueNftSetTokenPropertyPermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'setTokenPropertyPermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateUniqueNftTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"transferCross"`
 */
export const useSimulateUniqueNftTransferCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'transferCross',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateUniqueNftTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uniqueNftAbi}__ and `functionName` set to `"transferFromCross"`
 */
export const useSimulateUniqueNftTransferFromCross =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uniqueNftAbi,
    functionName: 'transferFromCross',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link uniqueNftAbi}__
 */
export const useWatchUniqueNftEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: uniqueNftAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link uniqueNftAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchUniqueNftApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: uniqueNftAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link uniqueNftAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchUniqueNftApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: uniqueNftAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link uniqueNftAbi}__ and `eventName` set to `"TokenChanged"`
 */
export const useWatchUniqueNftTokenChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: uniqueNftAbi,
    eventName: 'TokenChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link uniqueNftAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchUniqueNftTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: uniqueNftAbi,
    eventName: 'Transfer',
  })
