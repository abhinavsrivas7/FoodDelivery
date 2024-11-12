import { useState } from 'react';
import { ChamatoSearchBarProps } from './ChamatoSearchBarTypes';
import { SearchBar } from '@rneui/themed';
import Entypo from '@expo/vector-icons/Entypo';
import { IconNode } from '@rneui/base';

export default function ChamatoSearchBar({placeholder}: ChamatoSearchBarProps) {
    const [isListening, setIsListening] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>(placeholder ?? '');
    const t: IconNode = <Entypo name="mic" size={24} color="gray" />
    return (
        <SearchBar
            placeholder="Type Here..."
            onChangeText={text => setSearchText(text)}
            value={searchText}
            clearIcon={t}
        />
    );
};
