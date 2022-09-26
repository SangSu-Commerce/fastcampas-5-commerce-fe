import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  ChakraProps,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Img,
  Input,
  Link,
  LinkOverlay,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react';

interface JoinPageProps extends ChakraProps {}

function JoinPage({ ...basisProps }: JoinPageProps) {
  const { register, getValues } = useForm();

  return (
    <form>
      <VStack alignItems="flex-start" spacing={0}>
        <Box pt="20px">
          <Heading fontSize="26px">회원가입</Heading>
          {/* <Text as="h2" textStyle="xl" fontWeight="bold" mt="1.6rem">
          회원가입
        </Text> */}
        </Box>
        <Box pt="60px">
          <Heading fontSize="16px">회원정보입력</Heading>
        </Box>
        <Box alignSelf="center" py="40px">
          <Avatar w="70px" h="70px">
            <AvatarBadge
              boxSize="20px"
              bg="primary.500"
              borderWidth="0"
              right="5px"
              bottom="5px"
            />
          </Avatar>
          <Input type="file" display="none" />
        </Box>
        <VStack w="full" alignItems="flex-start" spacing="50px">
          <FormControl>
            <Text {...TextStyle}>이름</Text>
            <Input {...InputStyle} />
          </FormControl>
          <FormControl>
            <Text {...TextStyle}>닉네임</Text>
            <Input {...InputStyle} />
          </FormControl>
          <FormControl>
            <Text {...TextStyle}>핸드폰 번호</Text>
            <Input {...InputStyle} />
          </FormControl>
          <FormControl>
            <Text {...TextStyle}>이메일 주소</Text>
            <Input {...InputStyle} />
          </FormControl>
          <Box>
            <Heading size="sm">추가정보입력(선택)</Heading>
          </Box>
          <FormControl>
            <FormLabel fontSize="12px" fontWeight="700" color="primary.500">
              성별
            </FormLabel>
            <Select
              variant="flushed"
              placeholder="성별을 선택하세요"
              focusBorderColor="primary.500"
            >
              <option value="남성">남</option>
              <option value="여성">여</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontSize="12px" fontWeight="700" color="primary.500">
              연령대
            </FormLabel>
            <Select
              variant="flushed"
              placeholder="연령대를 선택하세요"
              focusBorderColor="primary.500"
            >
              <option value="10대">10대</option>
              <option value="20대">20대</option>
              <option value="30대">30대</option>
              <option value="40대">40대</option>
              <option value="50대 이상">50대 이상</option>
            </Select>
          </FormControl>
        </VStack>
        <Box pt="81px" pb="44px">
          <Heading size="sm">이용약관동의</Heading>
        </Box>
        <Flex direction="column" w="343px">
          <Flex
            justify="space-between"
            borderBottom="2px solid #FF710B"
            pb="7px"
          >
            <Text fontSize="16px" fontWeight="700" color="#FF710B">
              아래 약관에 모두 동의합니다.
            </Text>
            <Checkbox
              id="agreeAll"
              display="none"
              {...register('agreeAllTerms')}
            ></Checkbox>
            <label htmlFor="agreeAll">
              {getValues('agreeAllTerms') === true ? (
                <Img src="/icons/svg/circle-checked.svg" alt="checkAll" />
              ) : (
                <Img src="/icons/svg/circle-check.svg" alt="checkAll" />
              )}
            </label>
          </Flex>
          <Flex {...FlexStyle}>
            <Link href="https://toktokhan.notion.site/6e7a309e8d14464cad38fc86656d564a">
              <Text {...TermStyle} textDecor="underline">
                서비스 이용을 위한 필수약관 동의
              </Text>
            </Link>
            <Checkbox id="requiredTerms" display="none"></Checkbox>
            <label htmlFor="requiredTerms">
              {getValues('requiredTerms') === true ? (
                <Img src="icons/svg/checked-line.svg" />
              ) : (
                <Img src="icons/svg/check-line.svg" />
              )}
            </label>
          </Flex>
          <Flex {...FlexStyle}>
            <Link href="https://toktokhan.notion.site/3-2261ee2f25024c0a9b6a82a6f43fd0dc">
              <Text {...TermStyle} textDecor="underline">
                개인정보수집 및 이용, 제 3차 제공 동의
              </Text>
            </Link>
            <Checkbox id="privateTerms" display="none"></Checkbox>
            <label htmlFor="privateTerms">
              {getValues('requiredTerms') === true ? (
                <Img src="icons/svg/checked-line.svg" />
              ) : (
                <Img src="icons/svg/check-line.svg" />
              )}
            </label>
          </Flex>
          <Flex {...FlexStyle}>
            <Link href="https://toktokhan.notion.site/24f69842ebec48df89a3656bac7cf4c9">
              <Text {...TermStyle} textDecor="underline">
                마케팅 정보 수신 및 맞춤형 광고 동의(선택)
              </Text>
            </Link>
            <Checkbox id="marketingTerms" display="none"></Checkbox>
            <label htmlFor="privateTerms">
              {getValues('privateTerms') === true ? (
                <Img src="icons/svg/checked-line.svg" />
              ) : (
                <Img src="icons/svg/check-line.svg" />
              )}
            </label>
          </Flex>
        </Flex>
        <Box pt="96px" pb="50px">
          <Button {...ButtonStyle}>회원가입 완료</Button>
        </Box>
      </VStack>
    </form>
  );
}

export default JoinPage;

const InputStyle = {
  variant: 'outline',
  size: 'xs',
  h: '40px',
  fontSize: '16px',
  outline: '1px solid #1A1A1A',
  borderRadius: '100px',
  lineHeight: '28px',
  _focus: { border: '2px solid #FF710B', outline: '1px solid #FF710B' },
};

const TextStyle = {
  color: 'primary.500',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '18px',
  pb: '10px',
};

const TermStyle = {
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '18px',
  color: 'gray.600',
};

const ButtonStyle = {
  w: '343px',
  h: '50px',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '28px',
  borderRadius: '25px',
  bg: '#FF710B',
  color: '#FFFFFF',
  colorScheme: 'primary',
};

const FlexStyle = {
  justify: 'space-between',
  align: 'center',
  pt: '42px',
};
