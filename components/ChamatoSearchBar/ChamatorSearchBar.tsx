import { useState } from 'react';
import { ChamatoSearchBarProps } from './ChamatoSearchBarTypes';
import { Text } from 'react-native';

export default function ChamatoSearchBar({placeholder}: ChamatoSearchBarProps) {
    const [isListening, setIsListening] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>(placeholder ?? '');

    return (
        <Text />
    );
};
