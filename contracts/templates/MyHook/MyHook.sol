// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../../extensions/Purchasable/SlicerPurchasable.sol";

/**
 * Use this folder to quickly set up your custom purchase hook and factory contracts
 */
abstract contract MyHook is SlicerPurchasable {
    /// ============= Storage =============

    // Add storage variables to initialize

    /// ============ Functions ============

    /**
     * @notice Describe purchase requirements
     *
     * @dev Overridable function containing the requirements for an account to be eligible for the purchase.
     * @dev Used on the Slice interface to check whether a user is able to buy a product. See {ISlicerPurchasable}.
     * @dev Max quantity purchasable per address and total mint amount is handled on Slicer product logic
     */
    function isPurchaseAllowed(
        uint256,
        uint256,
        address,
        uint256,
        bytes memory,
        bytes memory
    ) public view virtual override returns (bool isAllowed) {
        // Add all requirements related to product purchase here
        // Return true if account is allowed to buy product
        isAllowed = true;
    }

    /**
     * @notice Describe added logic on purchase
     *
     * @dev Overridable function to handle external calls on product purchases from slicers. See {ISlicerPurchasable}
     */
    function onProductPurchase(
        uint256 slicerId,
        uint256 productId,
        address account,
        uint256 quantity,
        bytes memory slicerCustomData,
        bytes memory buyerCustomData
    ) public payable override onlyOnPurchaseFrom(slicerId) {
        // Check whether the account is allowed to buy a product.
        if (
            !isPurchaseAllowed(
                slicerId,
                productId,
                account,
                quantity,
                slicerCustomData,
                buyerCustomData
            )
        ) revert NotAllowed();

        // Add product purchase logic here
    }
}
