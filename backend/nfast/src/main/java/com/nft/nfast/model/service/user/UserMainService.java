package com.nft.nfast.model.service.user;

import com.nft.nfast.model.dto.business.*;

import java.util.List;

public interface UserMainService {
    List<StoreFindDto> findAllStore(String storeName);
    List<NfastGetDto> findAvailableNfast(long userSequence);
    List<NfastPurchaseDto> findPurchaseNfast(long store_sequence);
}